import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080", // Keycloak server
  realm: "ask_a_lawyer", // Your realm name
  clientId: "law_client_1", // Your client ID
});

export default keycloak;
