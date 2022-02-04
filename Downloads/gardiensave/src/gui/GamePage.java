package gui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class GamePage extends JFrame implements KeyListener {

    JLabel label;
    ImageIcon guard;

    public GamePage(){
        setTitle("Gardien");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 800);
        setLayout(null);
        setLocationRelativeTo(null);
        setResizable(false);
        this.addKeyListener(this);
        setBackground(Color.orange);
        setVisible(true);


        //guard = new ImageIcon("/guard.jpeg");
        java.net.URL imageURL = GameMenu.class.getResource("../guard.png");
        guard = new ImageIcon(new ImageIcon(imageURL).getImage().getScaledInstance(100,100,Image.SCALE_DEFAULT));

        label = new JLabel();
        label.setBounds(0,0,100,100);
        label.setIcon(guard);


        add(label);


    }

    @Override
    public void keyTyped(KeyEvent e) {
//est invoquer quand lutillisateur appuie sur une touche directionelle
        switch(e.getKeyChar()){
            case 'a': label.setLocation(label.getX()-50, label.getY());
                break;

            case 'w': label.setLocation(label.getX(), label.getY()-50);
                break;

            case 's': label.setLocation(label.getX(), label.getY()+50);
                break;

            case 'd': label.setLocation(label.getX()+50, label.getY());
                break;

        }
    }

    @Override
    public void keyPressed(KeyEvent e) {
//donne le numero du bouton qui est appuiyer

        switch(e.getKeyCode()){
            case 37: label.setLocation(label.getX()-10, label.getY());
                break;

            case 38: label.setLocation(label.getX(), label.getY()-10);
                break;

            case 40: label.setLocation(label.getX(), label.getY()+10);
                break;

            case 39: label.setLocation(label.getX()+10, label.getY());
                break;

        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
        //est invoquer quant un bouton est relacher
        //System.out.println("You released " + e.getKeyChar());
        System.out.println("You released " + e.getKeyCode());
    }
}
