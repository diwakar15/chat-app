let appID = "APP_ID";
let region = "APP_REGION";
let appSetting = new CometChat.AppSettingsBuilder()
                    .subscribePresenceForAllUsers()
                    .setRegion(region)
                    .autoEstablishSocketConnection(true)
                    .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  }, error => {
    console.log("Initialization failed with error:", error);
  }
);