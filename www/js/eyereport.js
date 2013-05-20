
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
            function onSuccess(position) {
                var ref = window.open('https://maps.google.com/maps?saddr='+position.coords.latitude+','+position.coords.longitude+'&daddr=45.404232,11.926511', '_blank', 'location=yes');
                ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
                ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
                ref.addEventListener('exit', function() { alert(event.type); });
            }
