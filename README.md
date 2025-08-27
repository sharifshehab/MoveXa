# MoveXa

MoveXa is a parcel delivery system that enables users to seamlessly send and receive parcels across different locations. Users can register as a Sender or Receiver, with an Admin managing the overall system. MoveXa provides a structured way to manage parcels, track delivery stages, and maintain a history of parcel status changes through a clean, well-organized API.


#### Sender:
- **Register as a Sender and Login**

- **Send parcels to registered receivers**

- **View all parcels sent by a sender**

- **Cancel parcels if needed**

#### Receiver:
- **View all parcels sent to a receiver**

- **Confirm parcel delivery or return parcel (mark as received or returned)**

- **View receiver parcel delivery history**

#### Admin:
- **Manage user status (e.g., block/unblock users)**

- **Update parcel status through different delivery stages**

- **Access and control all system operations via protected admin routes**


Security & Access Control
All routes are protected based on user roles (Sender, Receiver, Admin), ensuring secure access to authorized actions only.


## Tech Stack:
- **React**
- **TypeScript**
- **React Router**
- **Redux Toolkit**
- **Axios**


## Key features:
1. **User registration as sender/receiver.**
1. **Send parcel to receiver.**
3. **Update parcel status(dispatch, in transit, cancel, etc.).**
2. **Retrieve all users and parcels data for admin.**
5. **User role based protected routes**
6. **Generate summaries of delivery history.**


## Dev Dependencies:
    -@eslint/node: ^24.3.0,
    -@types/react: ^19.1.10,
    -@types/react-dom: ^19.1.7,
    -@typescript-eslint/eslint-plugin: ^7.18.0,
    -@typescript-eslint/parser: ^7.18.0,
    -@vitejs/plugin-react: ^4.7.0,
    -eslint: ^8.57.1,
    -eslint-plugin-react-hooks: ^4.6.2,
    -eslint-plugin-react-refresh: ^0.4.20,
    -tailwindcss: ^4.1.12,
    -tw-animate-css: ^1.3.7,
    -typescript: ^5.8.3,
    -vite: ^5.4.19,



## Dependencies:
    -@hookform/resolvers: ^5.2.1,
    -@next/font: ^14.2.15,
    -@radix-ui/react-dialog: ^1.1.15,
    -@radix-ui/react-dropdown-menu: ^2.1.16,
    -@radix-ui/react-label: ^2.1.7,
    -@radix-ui/react-select: ^2.2.6,
    -@radix-ui/react-slot: ^1.2.3,
    -@radix-ui/react-tooltip: ^1.2.8,
    -@radix-ui/react-toolkit: ^2.8.2,
    -@tailwindcss/vite: ^4.1.12,
    -@tanstack/react-table: ^8.21.3,
    -axios: ^1.11.0,
    -class-variance-authority: ^0.7.1,
    -clsx: ^2.1.1,
    -date-fns: ^4.1.0,
    -lucide-react: ^0.540.0,
    -next-themes: ^0.4.6,
    -radix-ui: ^1.4.3,
    -react: ^19.1.1,
    -react-aria-components: ^1.11.0,
    -react-dom: ^19.1.1,
    -react-hook-form: ^7.62.0,
    -react-icons: ^5.5.0,
    -react-redux: ^9.2.0,
    -react-router: ^7.8.1,
    -recharts: ^3.1.2
    -sonner: ^2.0.7
    -swiper: ^11.2.10
    -tailwind-merge: ^3.3.1
    -zod: ^4.0.17


## Installation:
1. **First, clone the repository to your local machine. you can do this by downloading the zip file or by cloning it using the web URL**
2. **Navigate to the project folder and open it with cmd terminal**
3. **Write <code>npm i</code> in the terminal. This will install all the necessary packages on your system**
4. **Create a file name <code>.env</code>, inside the project root folder**
5. **Save the backend url in the <code>.env</code> file as environment variables:**
    - **VITE_BASE_URL=back-end-url**
6. **After the installation is complete, start the application by typing <code>npm run dev</code> in terminal**

- **You should now be able interact with the application on your local machine!**

##  Live Link:
- **[MoveXa](https://move-xa.netlify.app)**