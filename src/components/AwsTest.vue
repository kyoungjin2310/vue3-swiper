<template>
  <div>
    <form ref="form">
      <input type="text" name="" id="" v-model="email" />
      <input type="password" name="" id="" v-model="password" required />
    </form>
    <button @click.prevent="onSubmit()">REGISTER</button>
  </div>
</template>

<script>
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var userPool = [];
var attributeList = [];
var dataEmail = {
  Name: 'email',
  Value: '',
};

export default {
  data: function () {
    return {
      callback: false,
      showerr: false,
      errcode: '',
      errmsg: '',
      username: '',
      email: '',
      password: '',
      loader: false,
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loader = 'loading';
      const l = this.loader;
      this[l] = !this[l];

      dataEmail.Value = this.email;
      var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
        dataEmail,
      );
      attributeList.push(attributeEmail);
      console.log('attribute list: ' + attributeList);
      userPool = new AmazonCognitoIdentity.CognitoUserPool(
        process.env.VUE_APP_POOLDATA,
      );
      console.log('sign up with: ' + this.email + ' ' + this.password);
      this.callback = false;
      this.errcode = '';
      this.username = '';

      userPool.signUp(
        this.email,
        this.password,
        attributeList,
        null,
        (err, result) => {
          if (!this.callback) {
            this.callback = true;
            console.log('register callback');
            if (err) {
              console.error('registration error: ' + JSON.stringify(err));
              this.errcode = JSON.stringify(err.code);
            } else {
              console.log('registration success: ' + JSON.stringify(result));
              this.message = JSON.stringify(result.message);
              console.log('user name is ' + result.user.getUsername());
              this.username = result.user.getUsername();
              this.$store.commit('setUsername', this.username);
            }
            this[l] = false;
            this.loader = null;
          }
        },
      );
    },
    getMessage: function () {
      return this.message;
    },
  },
  watch: {
    errcode() {
      console.log('watched error code: ' + this.errcode);
      if (this.errcode !== '') {
        if (this.errcode === '"UsernameExistsException"') {
          this.errmsg = 'An account with the given email already exists!';
        } else {
          this.errmsg = 'An error has occured!';
        }
        this.showerr = true;
      }
    },
  },
};
</script>

<style scoped></style>
