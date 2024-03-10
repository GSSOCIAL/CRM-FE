export default defineEventHandler(async (event) => {
    if (event.req.headers.authentication) {
        event.context.auth = { 
            id: "123"
        };
    }
});