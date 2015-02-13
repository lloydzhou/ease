var Ease = function(name){
    var e = function(i){
        return function(n){
            var o = function(n,i){return i * Math.pow( 2, (i>0?-10:10)*(i>.5?n:(n-=1)) ) * Math.sin( ( n - .1  ) * ( 2 * Math.PI  ) / .4  ) + (i>0?1:0);}
            if (n === 0 || n === 1) return n;
            if (i) return o(n,i)
            return ((n*=2)<1)?o(n,-.5):o(n,.5)
        }
        
    }
    var outbounce = function(n){
        return n<(1/2.75)?7.5625*n*n:n<(2/2.75)?7.5625*(n-=(1.5/2.75))*n+0.75:n<(2.5/2.75)?7.5625*(n-=(2.25/2.75))*n+0.9375:7.5625*(n-=(2.625/2.75))*n+0.984375;
    }, p = Math.pow, q = function(k,i){
        return function(n){
            var t = p(-1,k-1);
            return i==-1?p(n,k):1==i?--n*p(n,k-1)*t+1: (n*=2)<1?.5*p(n,k):.5*t*((n-=2)*p(n,k-1)+t*2)
        }
    }, _ = {
        linear: function(n){return n},
        insine: function(n){return 1-Math.cos(n*Math.PI/2)},
        outsine: function(n){return Math.sin(n*Math.PI/2)},
        inoutsine: function(n){return .5*(1-Math.cos(Math.PI*n))},
        inquad: q(2,-1),
        outquad: q(2,1),
        inoutquad: q(2),
        incube: q(3,-1),
        outcube: q(3,1),
        inoutcube: q(3),
        inquart: q(4,-1),
        outquart: q(4,1),
        inoutquart: q(4),
        inquint: q(5,-1),
        outquint: q(5,1),
        inoutquint: q(5),
        inexpo: function(n){return 0==n?0:p(1024, n-1)},
        outexpo: function(n){return 1==n?n:1-p(2, -10*n)},
        inoutexpo: function(n){return 0==n||1==n?n:(n*=2)<1?.5*p(1024, n-1):.5*(-p(2,-10*(n-1))+2)},
        incirc: function(n){return 1 - Math.sqrt(1 - n * n);},
        outcirc: function(n){return Math.sqrt(1 - (--n * n));},
        inoutcirc: function(n){n*=2;return n<1?-0.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)},
        inback: function(n){var s = 1.70158;return n * n * (( s + 1  ) * n - s);},
        outback: function(n){var s = 1.70158;return --n * n * ((s + 1) * n + s) + 1;},
        inoutback: function(n){var s = 1.70158 * 1.525; return (n*=2)<1?.5*(n*n*((s+1)*n-s)):.5*((n-=2)*n*((s+1)*n+s)+2)},
        inbounce: function(n){return 1-outbounce(1-n)},
        outbounce: outbounce,
        inoutbounce: function(n){return n<.5?(1-outbounce(1-n*2))*.5:outbounce(n*2-1)*.5+.5},
        inelastic: e(-1),
        outelastic: e(1),
        inoutelastic: e(),
    }
    var ename = name.toLowerCase().replace(/[_-]/g, '')
    return _[ename] || _.linear
};

