var name = prompt('Your name:');

new Tappuri((self) => {
    self.setBackground('res/Modern-School1.png');
    self.setName('Miya');
    self.setContent('Hello, I\'m Miya!');
}, (self) => {
    new Tappuri((self) => {
        self.setName('Miya');
        self.setContent('What\'s you name?');
    }, (self) => {
        new Tappuri((self) => {
            self.setName(name);
            self.setContent(`My name is ${name}`);
        }, (self) => {
            self.setName('Miya');
            self.setContent(`Nice to meet you, ${name}!`);
        });
    });
});
