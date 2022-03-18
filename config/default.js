exports.connexDb = function(){
    let mongoBdd = {
        port: 1337,
        bdd: 'NodeTp',
        dbUri: "mongodb://localhost:27017/nodeTpExample",
        saltWorkFactor: 10
    };

    return mongoBdd;
}