document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeUrl = 'path/to/your/resume.pdf';  // Replace with your resume URL
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Your_Resume.pdf';  // The name you want the downloaded file to have
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
