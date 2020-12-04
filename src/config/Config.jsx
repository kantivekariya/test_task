const dev = {
    BASE_URL: "https://randomuser.me/api"
}

const prod = {
    BASE_URL: "https://randomuser.me/api"
}

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default config;