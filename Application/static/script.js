let currentUser = null;
let isLoggedIn = false;
let hasClaimedReward = false;

async function login() {
    const usernameInput = $('#username').val();
    const passwordInput = $('#password').val();

    try {
        console.log('Sending login request with username:', usernameInput);
        const response = await fetch('http://localhost:8000/login/', { // Remove the trailing slash
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: usernameInput, password: passwordInput }),
            credentials: 'include', // Include credentials for cookies to be sent with the request
        });

        console.log('Received response:', response); // Log the entire response object

        const data = await response.json();

        console.log('Parsed response data:', data); // Log the parsed JSON data

        if (response.status === 200) { // Check for a successful login response
            console.log('Login successful');
            currentUser = { username: usernameInput };
            isLoggedIn = true;
            updateLoginStatus();
            showLoggedInContent();
        } else {
            console.error('Login failed:', data.message || 'Unknown error');
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
    }
}


async function logout() {
    try {
        const response = await fetch('http://localhost:8000/logout/', {
            method: 'POST',
            credentials: 'include',
        });

        const data = await response.json();

        if (response.ok) {
            currentUser = null;
            isLoggedIn = false;
            hasClaimedReward = false;
            updateLoginStatus();
            showLoggedOutContent();
        } else {
            alert(data.message || 'Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
}

async function checkAuthentication() {
    try {
        const response = await fetch('http://localhost:8000/checkAuth/', {  
            method: 'GET',
            credentials: 'include',
        });

        const data = await response.json();

        if (response.status === 200) {
            currentUser = { username: data.username };
            isLoggedIn = true;
            updateLoginStatus();
            showLoggedInContent();
        } else if (response.status === 401) {
            currentUser = null;
            isLoggedIn = false;
            hasClaimedReward = false;
            updateLoginStatus();
            showLoggedOutContent();
        }
    } catch (error) {
        console.error('Authentication check error:', error);
    }
}

function updateLoginStatus() {
    const loginStatusElement = document.getElementById('loginStatus');

    if (isLoggedIn) {
        loginStatusElement.textContent = `Logged in as ${currentUser.username}`;
    } else {
        loginStatusElement.textContent = 'Not logged in';
    }
}

function showLoggedInContent() {
    const loginSection = document.getElementById('loginSection');
    loginSection.style.display = 'none';

    const rewardSection = document.getElementById('rewardSection');
    rewardSection.style.display = 'block';
}

function showLoggedOutContent() {
    const loginSection = document.getElementById('loginSection');
    loginSection.style.display = 'block';

    const rewardSection = document.getElementById('rewardSection');
    rewardSection.style.display = 'none';
}

async function claimReward() {
    if (isLoggedIn && !hasClaimedReward) {
        try {
            const response = await fetch('http://localhost:8000/claimReward/', {
                method: 'POST',
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                document.getElementById('rewardMessage').textContent = 'Reward claimed!';
                hasClaimedReward = true;
            } else {
                alert(data.message || 'Failed to claim reward');
            }
        } catch (error) {
            console.error('Claim reward error:', error);
        }
    } else if (!isLoggedIn) {
        alert('You must be logged in to claim the reward');
    } else {
        alert('You have already claimed the reward for this week');
    }
}
