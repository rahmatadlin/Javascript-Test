/**
 Remove key that have null or undefined value

 INPUT
 [
  {
    "session_name": "first test",
    "classes": [
      {
        "class_name": undefined,
        "students": [
          {
            "name": "Jhon"
          }
        ]
      }
    ]
  },
  {
    "session_name": null,
    "classes": [
      {
        "class_name": "second class", 
        "students": [
          {
            "student_name": "Doe"
          }
        ]
      }
    ]
  }
]

OUTPUT
[
  {
    "session_name": "first test",
    "classes": [
      {
        "students": [
          {
            "student_name": "John"
          }
        ]
      }
    ]
  },
  {
    "classes": [
      {
        "class_name": "second class",
        "students": [
          {
            "student_name": "Doe"
          }
        ]
      }
    ]
  }
]
 */

const input = [
    {
        "session_name": "first test",
        "classes": [
            {
                "class_name": undefined,
                "students": [
                    {
                        "name": "Jhon"
                    }
                ]
            }
        ]
    },
    {
        "session_name": null,
        "classes": [
            {
                "class_name": "second class",
                "students": [
                    {
                        "student_name": "Doe"
                    }
                ]
            }
        ]
    }
];

const removeNullUndefined = obj => {
    if (Array.isArray(obj)) {
        return obj.map(removeNullUndefined);
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            if (obj[key] !== null && obj[key] !== undefined) {
                newObj[key] = removeNullUndefined(obj[key]);
            }
        }
        return newObj;
    } else {
        return obj;
    }
};

const result = removeNullUndefined(input);
console.log(JSON.stringify(result, null, 2));
