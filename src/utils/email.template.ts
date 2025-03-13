export const getTemplate = (content:string, url: string) : string => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ConKurrent</title>
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        body {
    margin: 0;
    padding: 0;
    font-family: "Big Shoulders Stencil", Tahoma, sans-serif;
    background: linear-gradient(135deg, #6a0dad, #b84ef0);
}

.container {
    max-width: 600px;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 4px solid transparent;
    background-clip: padding-box;
    position: relative;
}

.container::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #6a0dad, #b84ef0);
    border-radius: 12px;
    z-index: -1;
}

        .logo {
            font-family: 'Big Shoulders Stencil', sans-serif;
            font-size: 32px;
            color: #6a0dad;
        }
        .tagline {
            font-size: 14px;
            color: #555;
            margin-bottom: 20px;
        }
        .content {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
        }
        .message {
            margin-top: 20px;
            font-size: 16px;
            color: #444;
            font-style: italic;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
        .btn-learn-more {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 15px;
            font-size: 16px;
            color: white;
            background-color: #6a0dad;
            border-radius: 5px;
            text-decoration: none;
        }
        .btn:hover {
            background-color: #580d8a;
        }
        .conclusion{
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🎙 ConKurrent</div>
        <div class="tagline">Your gateway to reaching common grounds</div>
        <div class="content">
            ${content}
        </div>
        <div class="message">
           We sincerely appreciate your engagement with ConKurrent. Your input is invaluable in helping us create meaningful conversations and insightful discussions. Thank you for being a part of our journey! <br> <br>
           <div class="conclusion">
            Best regards, <br>
            The ConKurrent Team <br>
            Your gateway to reaching common grounds
            </div>
        </div>
        <a href="${url}" class="btn-learn-more">Learn More</a>
        <div class="footer">
            &copy; 2025 ConKurrent. All rights reserved.
        </div>
    </div>
</body>
</html>

`
}