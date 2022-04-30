import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <head>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
</head>
<body>

    <script>
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 850,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('fons', 'assets/fons.png');
        this.load.image('formatge', 'assets/formatge.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'fons');
        this.add.image(400, 300, 'formatge');                
    }

    function update () {

    }
    </script>

</body>
  )
}
