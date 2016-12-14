<template>
  <div>
    <div class="container">
      <h3 id="overview" class="page-header">导入excel文件数据</h3>
      <div class="row">
        <form role="form">
          <div class="form-group col-sm-7">
            <label for="exampleInputEmail1">上传excel文件</label>
            <div class="input-group">
              <span class="input-group-btn">
                <file-upload
                  title="上传文件"
                  class="btn btn-default file-upload"
                  :events="events"
                  name="xls"
                  post-action="/upload/xls"
                  extensions="xls,xlsx"
                  :files="files"
                  ref="upload">
                </file-upload>
              </span>
              <input type="text" class="form-control" placeholder="文件路径">
            </div>
          </div>
          <div class="form-group col-sm-7">
            <label for="exampleInputEmail1">上传文件信息</label>
            <ul class="fileInfo" v-for="file in files">
              <div class="alert alert-info" v-if="file.success" role="alert">
                <strong>上传成功!</strong>
              </div>
              <li class="alert alert-danger" v-if="!file.success" role="alert">
                <strong>上传失败!</strong>
              </li>
              <li>文件名：{{file.name}}</li>
              <li>大小：{{file.size | formatSize}}</li>
            </ul>
          </div>
        </form>
      </div>
      <h4 id="overview" class="page-header">数据</h4>
      <div class="col-lg-12">
        <table class="table table-list">
          <thead class="thead-default">
          <tr>
            <th v-for="item in nameList">{{item}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in rawData.slice(0,6)">
            <td v-for="value in nameList">
              <span>{{ item[value] }}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
    import FileUpload from 'vue-upload-component';
    /* eslint no-param-reassign: ["error", { "props": false }] */
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    export default{
      components: {
        FileUpload,
      },
      watch: {
        addTaskSuccess(value) {
          if (value) {
            this.changeFlag();
          }
        },
        addTaskFail(value) {
          if (value) {
            this.changeFlag();
          }
        },
      },
      filters: {
        formatSize(size) {
          if (size > 1024 * 1024 * 1024 * 1024) {
            return `${(size / 1024 / 1024 / 1024 / 1024).toFixed(2)} TB`;
          } else if (size > 1024 * 1024 * 1024) {
            return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
          } else if (size > 1024 * 1024) {
            return `${(size / 1024 / 1024).toFixed(2)} MB`;
          } else if (size > 1024) {
            return `${(size / 1024).toFixed(2)} KB`;
          }
          return `${size.toString()} B`;
        },
      },
      data() {
        return {
          /* 提交任务表单 */
          addTaskSuccess: false,
          addTaskFail: false,
          select(item) {
            this.algorithm = item.name;
            this.algorithmList.forEach((ele) => {
              ele.isSelected = false;
            });
            item.isSelected = true;
          },
          /*
            上传插件配置
           */
          files: [],
          upload: [],
          events: {
            add(file, component) {
              component.active = true;
              file.headers['X-Filename'] = encodeURIComponent(file.name);
              file.data.finename = file.name;
            },
          },
        };
      },
      computed: {
        rawData() {
          if (this.files.length) {
            return this.files[0].response.calculation;
          }
          return [0];
        },
        nameList() {
          if (this.files.length) {
            const foo = this.rawData[0];
            return Object.keys(foo);
          }
          return ['当前没有导入数据'];
        },
        fileName() {
          if (this.files.length) {
            return this.files[0].response.fileName;
          }
          return [0];
        },
        valid() {
          const valid = {
            uploadError: true,
            algorithmError: true,
          };
          if (this.files[0]) {
            if (this.files[0].success) {
              valid.uploadError = false;
            }
          }
          if (this.algorithm !== '') {
            valid.algorithmError = false;
          }
          valid.pass = (valid.uploadError || valid.algorithmError);
          return valid;
        },
      },
      methods: {
        comfirm() {
          this.$tore.dispatch('updateRaw', this.rawData);
          this.$tore.dispatch('updateSeriesName', this.nameList);
        },
        addTask() {
          this.$http.post('/calculation/cal',
            {
              fileName: this.fileName,
              algoName: this.algorithm,
              remark: this.remark,
            })
            .then(() => {
              this.addTaskSuccess = true;
            }, (err) => {
              this.addTaskFail = true;
              console.error(err);
            });
        },
        changeFlag() {
          setTimeout(() => {
            this.addTaskSuccess = false;
            this.addTaskFail = false;
          }, 5000);
        },
      },
      mounted() {
        this.upload = this.$refs.upload.$data;
      },
    };
</script>
<style>
  .fileInfo {
    list-style: none;
    line-height: 15px;
    padding-left: 0px;
  }
  .fileInfo li{
    font-size: 14px;
    width: 60%;
  }
  .metatit{
    color: #838383;
    text-align: left;
    font-weight: bold;
  }

</style>
