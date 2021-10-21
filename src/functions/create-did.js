const ION = require("../../lib/ion-tools/ion.js/lib");

//CREATE
export async function createDID() {
  try {
    //create keys
    let authnKeys = await ION.generateKeyPair();
    let did = new ION.DID({
      content: {
        publicKeys: [
          {
            id: "key-1",
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyJwk: authnKeys.publicJwk,
            purposes: ["authentication"],
          },
        ],
        services: [
          {
            id: "domain-1",
            type: "LinkedDomains",
            serviceEndpoint: "https://foo.example.com",
          },
        ],
      },
    });
    var shortDidURI = await did.getURI("short");
    return shortDidURI;
  } catch (e) {
    console.log(e);
  }
}

//UPDATE

//RECOVERY
