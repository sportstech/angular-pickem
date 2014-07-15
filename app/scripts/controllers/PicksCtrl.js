gameControllers.controller('picksCtrl', ['$scope', '$http', function($scope, $http){    
  var picks = [
    {
        id: 1,
        horseName: "Posse's on Broadway",
        jockeyName: "Sir Mixalot",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 1,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 2,
        horseName: "La-di-dah-di",
        jockeyName: "Doug E. Fresh",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 2,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 3,
        horseName: "Got What I Need",
        jockeyName: "Biz Markee",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 3,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 4,
        horseName: "Cool It Now",
        jockeyName: "Bobby Brown",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 4,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 5,
        horseName: "Playin Basketball",
        jockeyName: "Kurtis Blow",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 5,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 6,
        horseName: "It's Tricky",
        jockeyName: "Darryl Mac",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 6,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 7,
        horseName: "Freaks Come Out",
        jockeyName: "Who Dini",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 7,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 8,
        horseName: "Wrinkle Finkle",
        jockeyName: "Lois Einhorn",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 8,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 9,
        horseName: "John Elway Teeth",
        jockeyName: "Barry Johnson",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 9,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 10,
        horseName: "Soap Box Derby",
        jockeyName: "Alex Brown",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 10,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          },
          {
            year: "2012",
            wins: 2,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 11,
        horseName: "Morris Horse",
        jockeyName: "Jeff Smith",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 11,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          }
        ]
      },
      {
        id: 12,
        horseName: "Jerkey Treat",
        jockeyName: "Stanley Yelnats",
        jockeyDescription: "Here is a long description about the jockey that could by used in a modal or something like that.",
        silkNumber: 12,
        imagePath: "http://placehold.it/50X50",
        jockeyHistory: [
          {
            year: "2014",
            wins: 5,
            bestTime: "2:01:34"
          },
          {
            year: "2013",
            wins: 3,
            bestTime: "2:03:34"
          }
        ]
      }
  ];
    
    $scope.sourceScreens = picks.slice();

    // This is aggravating, and needs to die a horrible death, immediately.
    $scope.selectedScreens = [{ horseName: 'Morris Horse' }];

    

    // TODO: don't allow duplicate drags
    // Remove from sort list.
    $scope.sortableOptions = {
      connectWith: ".picks-list",
      cursor: "move",
      opacity: 0.8,
      placeholder: "droppable-slot",
      revert: 100,
      stop: function (e, ui) {
        // if the element is removed from the first container
        if ($(e.target).hasClass('first') &&
          ui.item.sortable.droptarget &&
          e.target != ui.item.sortable.droptarget[0]) {
            // clone the original model to restore the removed item
            $scope.sourceScreens = picks.slice();
          }
        }
    };
}]);