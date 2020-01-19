report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Index_page_0_document_0_pc.png",
        "test": "../bitmaps_test/20200119-133135/backstop_default_Index_page_0_document_0_pc.png",
        "selector": "document",
        "fileName": "backstop_default_Index_page_0_document_0_pc.png",
        "label": "Index page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/index",
        "expect": 0,
        "viewportLabel": "pc",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -87
          },
          "misMatchPercentage": "4.08",
          "analysisTime": 116
        },
        "diffImage": "../bitmaps_test/20200119-133135/failed_diff_backstop_default_Index_page_0_document_0_pc.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Product_page_0_document_0_pc.png",
        "test": "../bitmaps_test/20200119-133135/backstop_default_Product_page_0_document_0_pc.png",
        "selector": "document",
        "fileName": "backstop_default_Product_page_0_document_0_pc.png",
        "label": "Product page",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/product",
        "expect": 0,
        "viewportLabel": "pc",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -149
          },
          "misMatchPercentage": "9.04",
          "analysisTime": 92
        },
        "diffImage": "../bitmaps_test/20200119-133135/failed_diff_backstop_default_Product_page_0_document_0_pc.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});