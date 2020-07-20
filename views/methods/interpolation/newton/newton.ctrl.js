angular.module('numerical-analysis')
    .controller('NewtonInterpolationCtrl', function (NewtonInterpolation, Utils) {

        var self = this;

        self.results = [];

        self.xs = [50, 200, 350];
        self.ys = [50, 149.49363435889023, 249.12670270278602];

        self.calculate = function () {
            var res = NewtonInterpolation.calculate(self.xs, self.ys);
            for(var i = 0; i < res.length; i++) {
                var result = {};

            }
            console.log();
        };
    });
