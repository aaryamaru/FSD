fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: "api_test_" + Date.now(), password: "password123" })
})
.then(async res => {
    console.log("Status:", res.status);
    console.log("Data:", await res.json());
})
.catch(err => console.error(err));
