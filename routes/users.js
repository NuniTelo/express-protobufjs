var express = require('express');
var router = express.Router();
var protobuf = require('protobufjs');

const path = require('path')

// var protoJson = {
//     'nested': {
//         'UserInfo': {
//             'fields': {
//                 'name': {
//                     "type": "string",
//                     "id": 1
//                 },
//                 'timestamp': {
//                     "type": "string",
//                     "id": 2
//                 },
//                 'Age': {
//                     "type": "string",
//                     "id": 3
//                 }
//             }
//         },
//         'TestOfMine' : {
//           'fields' : {
//             'name': {
//               "type": "string",
//               "id": 1
//             }
//           }
//         }
//     }
// };
//
// var root = protobuf.Root.fromJSON(protoJson);
// var UserInfo = root.lookup('UserInfo');
//
// var TestOfMine = root.lookup('TestOfMine');

// /* GET users listing. */
// router.get('/data', function (req, res, next) {
//
//     var reqData = req.body;
//
//     var len;
//     for (var i in reqData) {
//         len = parseInt(i);
//     }
//     var uint8 = new Uint8Array(len + 1);
//
//     for (var j = 0; j <= len; j++) {
//         uint8[j] = reqData[j]
//     }
//
//     res.send(UserInfo.decode(uint8));
// });
//
// router.get('/encode', function (req, res, next) {
//
//     var user1 = {
//         name: 'liuyiqiao1',
//         timestamp: '111',
//         Age: '251'
//     };
//     var buffer1 = UserInfo.encode(user1).finish();
//
//     // var decodeBuffer = UserInfo.decode(buffer1).finish();
//     // console.log(decodeBuffer);
//     var dd = UserInfo.decode(buffer1);
//     console.log(dd);
//      // res.send(buffer1);
// });
//
// router.get('/test',function(req,res,next){
//   var data = {
//     name : 'Nuni'
//   };
//
//   var enxode = TestOfMine.encode(data).finish();
//
//
//   console.log(enxode);
//
//   var decode = TestOfMine.decode(enxode);
//
//   console.log(decode.name);
//
// });



router.get('/test2',function(req,res,next) {
  protobuf.load(path.resolve("./routes/awesome.proto"), function(err, root) {
    if (err)
        throw err;

    var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");   //e lidhim me ke e duam funx

    // Exemplary payload
    var payload = { awesomeField: "AwesomeString",name:"nuni",msg: {
      name:'nuni1'
    } };

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = AwesomeMessage.encode(payload).finish();
    console.log(buffer);
    // ... do something with buffer

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = AwesomeMessage.decode(buffer);

    console.log(message);

    //
    // var messageTwo = root.lookupType("awesomepackage.NuniMessage");
    //
    // var dd =  {
    //   name: 'Nuni'
    // };
    //
    // var enc = messageTwo.encode(dd).finish();
    // console.log(enc);
    //
    // var dec = messageTwo.decode(enc);
    // console.log(dec);

});

});



  router.get('/test3',function(req,res,next){
    protobuf.load(path.resolve("./routes/data.proto"), function(err, root) {
      if(err) throw err;
        var DataObject = root.lookupType("cartographic.DataObject");

        // Exemplary payload
        var payload = { category: 'lolzzz',context:{
          nameContext:'213'
        }};

        // Encode a message to an Uint8Array (browser) or Buffer (node)
        var buffer = DataObject.encode(payload).finish();
        console.log(buffer);
        // ... do something with buffer

        // Decode an Uint8Array (browser) or Buffer (node) to a message
        var message = DataObject.decode(buffer);

        console.log(message);

      });




  });





module.exports = router;
