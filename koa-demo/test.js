const result = {
  "misc": {
    "compileTime": 59857
  },
  "plugins": {
    "WebpackResolveConfigPlugin": 12480,
    "MiniCssExtractPlugin": 2274,
    "EnvironmentPlugin": 0,
    "DefinePlugin": 0,
    "HtmlWebpackPlugin": 2840,
    "BundleAnalyzerPlugin": 160
  },
  "loaders": {
    "build": [
      {
        "averages": {
          "dataPoints": 1,
          "median": 22,
          "mean": 22,
          "range": {
            "start": 22,
            "end": 22
          }
        },
        "activeTime": 22,
        "loaders": [
          "html-webpack-plugin"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 1799,
          "median": 394,
          "mean": 401,
          "range": {
            "start": 0,
            "end": 12387
          },
          "variance": 194610
        },
        "activeTime": 57605,
        "loaders": [
          "source-map-loader"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 6,
          "median": 276,
          "mean": 689,
          "range": {
            "start": 194,
            "end": 2476
          },
          "variance": 788976
        },
        "activeTime": 3511,
        "loaders": [
          "modules with no loaders"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 990,
          "median": 374,
          "mean": 465,
          "range": {
            "start": 14,
            "end": 1396
          },
          "variance": 74805
        },
        "activeTime": 51586,
        "loaders": [
          "babel-loader",
          "source-map-loader"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 200,
          "median": 2,
          "mean": 2,
          "range": {
            "start": 0,
            "end": 6
          },
          "variance": 1
        },
        "activeTime": 385,
        "loaders": [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 201,
          "median": 519,
          "mean": 678,
          "range": {
            "start": 120,
            "end": 1499
          },
          "variance": 85713
        },
        "activeTime": 39272,
        "loaders": [
          "css-loader",
          "postcss-loader"
        ],
        "subLoadersTime": {}
      },
      {
        "averages": {
          "dataPoints": 18,
          "median": 6147,
          "mean": 1062,
          "range": {
            "start": 250,
            "end": 6147
          },
          "variance": 1758736
        },
        "activeTime": 13922,
        "loaders": [
          "url-loader"
        ],
        "subLoadersTime": {}
      }
    ]
  }
}

const { plugins, loaders: { build } } = result
let pluginTime = 0
Object.entries(plugins).forEach(([ key, time ]) => {
  pluginTime += time
})

let loaderTime = 0
build.forEach(({ activeTime }) => {
  loaderTime += activeTime
})

console.log(pluginTime, loaderTime)

// The "General output time" is how long it takes webpack to do everything
// in the build. The plugin times aren't expected to add up to that number.

/**
 * It's a combination of all loaders, plugins, and any other set-up time that webpack
 * has in getting everything in order. I'll see if I can find a way to make it clearer
 * that it's not meant to be a summation of the loaders and plugins (although it's expected
 * to be in that ballpark, since webpack doesn't do much else usually)
 * 
 * And yes, as you say, parallelisation can cause some time discrepancies. Again, in theory
 * it would be nice to output this information, but measuring parallelisation is quite hard!
 */
