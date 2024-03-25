document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const btn_signin = document.getElementById('btn-signup')
    btn_signin.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
        }
        postDataGG(data);
        alert("ĐĂNG KÍ THÀNH CÔNG");
    })
    async function postDataGG(data) {
        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScWI3eiKTffe7wR9JUyyNRyQwOCXnSrDIOrq4HcO_lBqg1p9g/formResponse";
        const formData = new FormData()
        formData.append('entry.1461837163', data.name);
        formData.append('entry.508762025', data.email);
        formData.append('entry.1917562376', data.password);
        await fetch(formURL, {
            method: "POST",
            body: formData,
        })
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const sign_in = document.getElementById('sign-in');
    sign_in.addEventListener('click', async (e) => {
        e.preventDefault();
        const login_email = document.getElementById('login-email').value;
        const login_password = document.getElementById('login-password').value;
        await login(login_email, login_password);
    });
    async function login(email, password) {
        try {
            const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=KvurPRap7R2JyuFtOT-zPrAIrMuDcq6EtKEPw1sglg8W4dHZ9m6KERZUBSFSnOiQBL_p0L4MV5RTZNY3qem4BG-EozTV8PNPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHJpApT9quWsMlLZohY6NeOIHzRAZ9AYB3lKeos5nCiiD2iw9FIXM3CdBaNJHClIj0jB0lSrm5rtrJuiMUBB3PvRoCDDEEbDhQ&lib=MIVZSHaPj63vRYciA67dPQV25xvplq3UH")
            const data_res = await res.json();
            
            const user = data_res.find(user => user.email === email && user.password == password)
            if (user) {
                console.log('Đăng nhập thành công!');
                window.location.href = '/index.html'
            } else {
                console.log('Tên đăng nhập hoặc mật khẩu không chính xác.');
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
    
});


