const LEETCODE_SESSION = "MY_LEETCODE_SESSION"
const CSRF_TOKEN = "MY_CSRF_TOKEN"
const NEW_SESSION_NAME = "MyNewSession1";

const fetchWithRetry = async (url, options, retries) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                console.log('Request succeeded:', response);
                return response;
            } else {
                console.log('Request failed');
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }
    console.log(`All ${retries} attempts failed.`);
};

const url = "https://leetcode.com/session/";
const options = {
    headers: {
        "content-type": "application/json",
        "x-csrftoken": CSRF_TOKEN,
        "x-requested-with": "XMLHttpRequest",
        "cookie": `LEETCODE_SESSION=${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTA2MTg5NDciLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI2NGFlNzEzMWZjMjQ1YThhNmM0NTY4ZjVjMjM2MWIwNmZkM2VhYzJkYWI4NWZmZGFiOWQ5YmYwYzk5YTgyNWQ1Iiwic2Vzc2lvbl91dWlkIjoiYjI4MzU0MjMiLCJpZCI6MTA2MTg5NDcsImVtYWlsIjoibWF0dGFsYXhtaWNoYW5kcmF2eWFzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTUxDVkwwMDY3NSIsInVzZXJfc2x1ZyI6Ik1MQ1ZMMDA2NzUiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvTUxDVkwwMDY3L2F2YXRhcl8xNzE1ODc5MDMwLnBuZyIsInJlZnJlc2hlZF9hdCI6MTczOTUyMTYxOSwiaXAiOiIxMzYuMjMzLjkuMTA0IiwiaWRlbnRpdHkiOiI0MTc3MGU0MDhkNDUzZjBlMThiNmNmNTM1ZTIyMGM4NCIsImRldmljZV93aXRoX2lwIjpbIjVhZDhkN2JmMGRhMGY0NzBjMTM4MmJhZGNiMDhiOTAyIiwiMTM2LjIzMy45LjEwNCJdfQ.74T8iH08FE8D0V5n66ldeqxfpf463uY7Qeip-6UeEeQ};`
    },
    body: JSON.stringify({
        func: "create",
        name: NEW_SESSION_NAME
    }),
    method: "PUT"
};
const maxRetries = 50; // Set the maximum number of retries you are welcome to change this value

fetchWithRetry(url, options, maxRetries);
