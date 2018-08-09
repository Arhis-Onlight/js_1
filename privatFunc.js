let Test = (function() {    

    let publicFunc = function() {
        console.log("Hello from publicFunc() :)");
        privateFunc();
    }

    let privateFunc = function() {
        console.log( 'Hello from private function!' );
    }
    return {
        publicFunc: publicFunc,
    }
})();

    
    //  Test.privateFunc(); // Uncaught TypeError: Test.privateFunc is not a function
    Test.publicFunc();
    
    