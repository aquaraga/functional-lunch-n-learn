//'Safely' do an action 10 times 


let action = () => {
    if (Math.random() >= 0.5) {
       throw 'Boom.. Crash..';
    }
    console.log('Action')
}
