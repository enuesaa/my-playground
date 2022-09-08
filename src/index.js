import inquirer from 'inquirer';

/**
 * using official example `editor`
 * @see https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/editor.js 
 */
inquirer
  .prompt([
    {
      type: 'editor',
      name: 'bio',
      message: 'Please write a short bio of at least 3 lines.',
      validate(text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines.';
        }
  
        return true;
      },
      waitUserInput: true,
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
