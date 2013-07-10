 /******* Request access to Location Services *******/
            
            // Wait for PhoneGap to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
             var watchID = null;
            // PhoneGap is ready
            //
            function onDeviceReady() {
             //   navigator.geolocation.getCurrentPosition(onSuccess, onError);
                // onSuccess Geolocation
                var options = { timeout: 3000000 };
                watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
            }

                function onSuccess(position) {
                    var element = document.getElementById('geolocation');
                    element.innerHTML = "http://maps.google.com/maps?q="+position.coords.latitude+","+position.coords.longitude+"(My+Point)&z=14&ll="+position.coords.latitude+","+position.coords.longitude;
                    /*
                    var origPos = "location";
                    var geoPos = origPos.replace("location", position.coords.latitude + position.coords.longitude);
                    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                    'Longitude: '          + position.coords.longitude             + '<br />' +
                    'Altitude: '           + position.coords.altitude              + '<br />' +
                    'Accuracy: '           + position.coords.accuracy              + '<br />' +
                    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                    'Heading: '            + position.coords.heading               + '<br />' +
                    'Speed: '              + position.coords.speed                 + '<br />' +
                    'Timestamp: '          + new Date(position.timestamp)          + '<br />';
                    */
                }
                
                // onError Callback receives a PositionError object
                //
                function onError(error) {
                    alert('code: '    + error.code    + '\n' +
                          'message: ' + error.message + '\n');
                }

/////////////////////
/*

            // Wait for Cordova to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
            var watchID = null;
            // Cordova is ready
            //
            function onDeviceReady() {
                // Throw an error if no update is received every 30 seconds
                var options = { timeout: 3000000 };
                watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
            }
            
            // onSuccess Geolocation
            //
            function onSuccess(position) {
                var element = document.getElementById('geolocation');
                element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                'Longitude: ' + position.coords.longitude     + '<br />' +
                '<hr />'      + element.innerHTML;
            }
            
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
            
            // Cordova is ready
            //
   //         function onSuccess(position) {
           // routes current location to specified coordinate... pops up onDevicce ready need to fix
            
           //     var ref = window.open('https://maps.google.com/maps?saddr='+position.coords.latitude+','+position.coords.longitude+'&daddr=45.404232,11.926511', '_blank', 'location=yes');
           //     ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
           //     ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
           //     ref.addEventListener('exit', function() { alert(event.type); });
            
            
    //        }


$("#getinfo").click(function() {
                    
                    $("input[name*=radio-choice-]:checked").each(function() {
                                                                 alert($(this).val());
                                                                 });
                    
                    });

$('input[name=capture_type]').change(function() {
                                     var radio_val = $('input[name=capture_type]:checked').val();
                                     alert('Radio Value: '+radio_val);
                                     });

*/