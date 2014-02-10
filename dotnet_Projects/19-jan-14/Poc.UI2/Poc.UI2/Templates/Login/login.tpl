<form role="form" class="form-horizontal form-signin">
  <h2 class="form-group font"> Sign In</h2>
  <div class="form-group font">Sign in using your registered account</div>
  <div class="form-group input-group">
    <span class="input-group-addon">
      <img src="/images/User_icon.png" />
    </span>
    <input type="text" id="inputUsername" class="form-control" placeholder="Username" />

  </div>
  <div class="form-group input-group">
    <span class="input-group-addon">
      <img src="/images/PW_icon.png" />
    </span>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" />
  </div>
  <div class="form-group">
    <label class="checkbox col-sm-8 font" >
      <input type="checkbox" value="Keep me signed in" /> Keep me signed in
    </label>
    <div class="col-sm-4 rem-padding-right  ">
      <button id="btnLogin" class="btn btn-large btn-primary form-control btn-sub-color ">Sign in</button>
    </div>
  </div>
  <div class="form-group">
    <hr class="dotted-line" />
  </div>
  <div class="form-group">
    <div class="col-sm-6 rem-padding-left" >
      <button class="btn btn-large btn-primary form-control btn-req-access-col  " type="submit">
        <span class="glyphicon "></span>Request Access
      </button>
    </div>
    <div class="col-sm-6 rem-padding-right">
      <button class="btn btn-large btn-primary form-control btn-res-pass-col  " type="submit">
        <span class="glyphicon"></span>Reset Password
      </button>
    </div>
  </div>
</form>


