<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Flips Physics Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #1a1a1a;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        #gameContainer {
            position: relative;
            width: min(100vw, 800px);
            height: min(100vh, 600px);
            background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
            border: 3px solid #333;
            overflow: hidden;
        }
        
        canvas {
            display: block;
            width: 100%;
            height: 100%;
        }
        
        #ui {
            position: absolute;
            top: 10px;
            left: 10px;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            z-index: 10;
        }
        
        #info {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: #333;
            font-size: 12px;
            z-index: 10;
        }

        #mobileControls {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 20;
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 8px;
            padding: 12px 10px calc(12px + env(safe-area-inset-bottom));
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }

        .btn {
            width: 56px;
            height: 56px;
            border: 2px solid #fff;
            border-radius: 12px;
            background: rgba(51, 51, 51, 0.9);
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            line-height: 1;
            user-select: none;
            touch-action: manipulation;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn:active {
            background: rgba(90, 90, 90, 0.95);
            transform: scale(0.96);
        }

        .btn-wide {
            width: 80px;
        }

        .btn-small {
            width: 46px;
            height: 46px;
            font-size: 14px;
        }

        @media (min-width: 769px) {
            #mobileControls {
                display: none;
            }
        }

        @media (max-width: 480px) {
            #gameContainer {
                width: 100vw;
                height: 100vh;
            }

            #ui {
                font-size: 14px;
            }

            #info {
                font-size: 10px;
                max-width: 72%;
            }

            .btn {
                width: 52px;
                height: 52px;
                font-size: 16px;
            }

            .btn-wide {
                width: 72px;
            }
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <canvas id="gameCanvas"></canvas>
        <div id="ui">
            <div>Score: <span id="score">0</span></div>
            <div>Combo: <span id="combo">0</span></div>
        </div>
        <div id="info">
            <div>← → Mover | SPACE Saltar | E Agarrar | W/S Trucos</div>
        </div>

        <div id="mobileControls">
            <button id="btnLeft" class="btn btn-small" aria-label="Move left">←</button>
            <button id="btnRight" class="btn btn-small" aria-label="Move right">→</button>
            <button id="btnGrab" class="btn btn-wide" aria-label="Grab bar">GRAB</button>
            <button id="btnJump" class="btn btn-wide" aria-label="Jump or launch">LAUNCH</button>
            <button id="btnUp" class="btn btn-small" aria-label="Trick up">↑</button>
            <button id="btnDown" class="btn btn-small" aria-label="Trick down">↓</button>
        </div>
    </div>

    <script src="game.js"></script>
</body>
</html>
