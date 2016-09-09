var google = require('googleapis');


var calId = '1jlb41sv08ik9mvs86g4eo001s@group.calendar.google.com';

function createEvent(auth) {
    var calendar = google.calendar('v3');
    calendar.events.insert({
            auth: auth,
                calendarId: 'primary',
                resource: {
                start: {
                    dateTime: "2016-09-09T12:30:00.000-04:00",
                        timeZone: "America/New_York"
                        },
                    end: {
                    dateTime: "2016-09-09T12:30:00.000-04:00",
                        timeZone: "America/New_York"
                        },
                    summary: "hi again calendar",
                    description: "hello"
                    }
        }, function(err, something) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(something);
            }
        });
}

module.exports.createEvent = createEvent;


var google = require('googleapis');


var calId = '1jlb41sv08ik9mvs86g4eo001s';

function createEvent(auth) {
    var calendar = google.calendar('v3');
    calendar.events.insert({
            auth: auth,
                calendarId: calId,
                resource: {
                start: {
                    dateTime: "2016-09-09T12:30:00.000-04:00",
                        timeZone: "America/New_York"
                        },
                    end: {
                    dateTime: "2016-09-09T12:30:00.000-04:00",
                        timeZone: "America/New_York"
                        },
                    summary: "hi again calendar",
                    description: "hello"
                    }
        }, function(err, something) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(something);
            }
        });
}

module.exports.createEvent = createEvent;

function listCalendars(auth) {
    var calendar = google.calendar('v3');
    calendar.calendarList.list({
            auth: auth
                }, function(err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return;
            }
            var events = response.items;
            if (events.length == 0) {
                console.log('No upcoming events found.');
            } else {
                console.log('List of Calendarss:');
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    console.log('%s - %s', event.id, event.summary);
                }
            }
        });
}

module.exports.listCalendars = listCalendars;