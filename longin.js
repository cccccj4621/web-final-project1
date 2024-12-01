// 确保DOM加载完成后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('button');

    // 获取 small 标签
    const usernameError = usernameInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;

    // 验证用户名的函数
    function validateUsername() {
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '' || usernameValue.length < 12) {
            showError(usernameInput, usernameError, 'Username must be at least 12 characters!');
            return false; // 验证失败
        } else {
            showSuccess(usernameInput, usernameError);
            return true; // 验证成功
        }
    }

    // 验证密码的函数
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '' || passwordValue.length < 18) {
            showError(passwordInput, passwordError, 'Password must be at least 18 characters!');
            return false; // 验证失败
        } else {
            showSuccess(passwordInput, passwordError);
            return true; // 验证成功
        }
    }

    // 显示错误信息函数
    function showError(input, errorElement, message) {
        errorElement.style.display = 'block';
        errorElement.textContent = message;
    }

    // 显示成功信息函数（隐藏错误信息）
    function showSuccess(input, errorElement) {
        errorElement.style.display = 'none';
    }

    // 初始化时隐藏错误信息
    showSuccess(usernameInput, usernameError);
    showSuccess(passwordInput, passwordError);

    // 监听输入框实时验证
    usernameInput.addEventListener('input', validateUsername);
    passwordInput.addEventListener('input', validatePassword);

    // 监听按钮点击事件
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 执行验证
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        // 如果用户名和密码都验证通过，则执行跳转
        if (isUsernameValid && isPasswordValid) {
            window.location.href = 'http://127.0.0.1:5500/header/index.html';
        }
    });
});
