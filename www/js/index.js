/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('resetBtn').addEventListener('click', function () {
        document.getElementById('loginForm').reset();
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Here you can add your validation logic
        if (username === 'admin' && password === 'password') {
            document.getElementById('message').textContent = 'Login successful!';
            // You can redirect or perform other actions after successful login
        } else {
            document.getElementById('message').textContent = 'Invalid username or password.';
        }
    });
});

