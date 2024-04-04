# Squid Samples: Squid Cloud storage

## This sample app contains client and backend code to demonstrate using Squid Cloud's storage bucket feature

Squid's storage feature lets you manage files with the Squid Client SDK so you can interface with your files from any client. Secure your files using the Squid Backend SDK for a seamless development and user experience. Use the built-in storage instance provided by Squid when creating an application, or connect your own AWS storage bucket.

You can access Squid storage through the following integrations:

[Built-in storage integration](https://docs.squid.cloud/docs/integrations/storage/built-in-storage)
[AWS S3 storage bucket integration](https://docs.squid.cloud/docs/integrations/storage/aws-storage)
Once connected, you can connect to your storage integration using the Squid Client SDK. To learn more about managing files from the client, view the [Squid storage documentation](https://docs.squid.cloud/docs/development-tools/client-sdk/storage).

### What it is:

- A Squid backend with a security service function to enable access to the Squid Cloud built-in storage bucket. You can upload files and generate download URLs to download the files.
- Download URLs are stored in the [Squid built-in database](https://docs.squid.cloud/docs/integrations/database/built-in).
- A React frontend that uses Squid's [React SDK](https://docs.squid.cloud/docs/development-tools/react-sdk/) and [Squid storage](https://docs.squid.cloud/docs/integrations/storage/). To get up and running quickly, you can use the [built-in storage bucket](https://docs.squid.cloud/docs/integrations/storage/built-in-storage).

### What you'll need:

- A [Squid Cloud](https://console.squid.cloud) account
- Node.js and npm
- [The Squid CLI](https://docs.squid.cloud/docs/development-tools/local-dev-cli)

### Running the project

1. In the [Squid Cloud Console](https://console.squid.cloud) create a new app called `storage`.
2. Connect the Squid backend to the new app you created by scrolling in the console to the **Backend** section and selecting **Create .env file**. Copy the command.
3. Open a terminal window and change to the `storage-backend` directory.

```bash
cd storage-backend
```

4. Install the required packages:

```bash
npm install
```

5. Create the `.env` file by running the command you copied. It will have this format:

```bash
squid init-env \
 --appId [YOUR_APP_ID] \
 --apiKey [YOUR_API_KEY] \
 --environmentId dev \
 --squidDeveloperId [YOUR_SQUID_DEVELOPER_ID]  \
 --region us-east-1.aws
```

6. Start the backend in this terminal window by running the following command:

```bash
squid start
```

7. Open a second terminal window. In this window, navigate to the frontend:

```bash
cd storage-frontend
```

8. Install the required dependencies:

```bash
npm install
```

9. Open the `storage-frontend/src/main.tsx` file and update the configuration with your app's information. You can find the values in the Squid Cloud Console or in the `.env` file you downloaded.
10. Start the frontend by running:

```bash
npm run dev
```

11. Click the URL in the terminal logs to open the app (likely http://localhost:5173/).
12. Interact with the UI. Upload an image and it will appear in the view.

### Next Steps:

To learn more about Squid storage buckets, view the [docs on storage](https://docs.squid.cloud/docs/development-tools/client-sdk/storage). [learn how to secure your storage buckets](https://docs.squid.cloud/docs/development-tools/backend/security-rules/secure-storage)
