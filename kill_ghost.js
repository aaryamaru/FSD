const { execSync } = require('child_process');
try {
    const stdout = execSync('netstat -ano | findstr :5000').toString();
    const lines = stdout.trim().split('\n');
    lines.forEach(line => {
        if (!line) return;
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && pid !== '0') {
            console.log('Killing PID', pid);
            execSync(`taskkill /F /PID ${pid}`);
        }
    });
} catch(e) {}
