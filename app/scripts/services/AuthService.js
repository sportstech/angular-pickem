// myApp.factory('AuthService', function ($http, Session) {
//   var authService = {};
 
//   authService.login = function (credentials) {
//     return $http
//       .post('/login', credentials)
//       .then(function (res) {
//         Session.create(res.id, res.user.id, res.user.role);
//         return res.user;
//       });
//   };
 
//   authService.isAuthenticated = function () {
//     return !!Session.userId;
//   };
 
//   authService.isAuthorized = function (authorizedRoles) {
//     if (!angular.isArray(authorizedRoles)) {
//       authorizedRoles = [authorizedRoles];
//     }
//     return (authService.isAuthenticated() &&
//       authorizedRoles.indexOf(Session.userRole) !== -1);
//   };
 
//   return authService;
// });

// myApp.run(function ($rootScope, AUTH_EVENTS, AuthService) {
//   $rootScope.$on('$stateChangeStart', function (event, next) {
//     var authorizedRoles = next.data.authorizedRoles;
//     if (!AuthService.isAuthorized(authorizedRoles)) {
//       event.preventDefault();
//       if (AuthService.isAuthenticated()) {
//         // user is not allowed
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
//       } else {
//         // user is not logged in
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
//       }
//     }
//   });
// });

// myApp..factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
//   return {
//     responseError: function (response) { 
//       $rootScope.$broadcast({
//         401: AUTH_EVENTS.notAuthenticated,
//         403: AUTH_EVENTS.notAuthorized,
//         419: AUTH_EVENTS.sessionTimeout,
//         440: AUTH_EVENTS.sessionTimeout
//       }[response.status], response);
//       return $q.reject(response);
//     }
//   };
// })