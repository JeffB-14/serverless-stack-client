export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51Gqn6WLMeIth7eUae8uEPu4od8XjRIsqMQdmG3fhLtnipj7pVrw0cmIXvrZ5rKq90yWfusec04LShvf3WkUSmvlP00ddVq4Ajy",
  s3: {
    REGION: "us-east-2",
    BUCKET: "amos-smarttrackdna"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://26tny1tlyc.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LYylUqRNV",
    APP_CLIENT_ID: "5tvp0pnhdelpvjj0i5up1b7bpi",
    IDENTITY_POOL_ID: "us-east-2:34e05b9e-9cc5-4949-bff8-466454cce36f"
  }
};