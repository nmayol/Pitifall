import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    config = {
        type: Phaser.AUTO,
        width: 480,
        height: 850,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    },

    game = new Phaser.Game(config),

    function preload ()
    {
        this.load.image('fons', 'assets/fons.png');
        this.load.image('formatge', 'assets/formatge.png');
    },

    function create ()
    {
        this.add.image(400, 300, 'fons');
        this.add.image(400, 300, 'formatge');                
    },

    function update () {

    }
  )
}
