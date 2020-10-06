const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>,  <span class="code">clear</span>',
  about:
    "Hello 👋<br>I'm the person who has a burning passion for breaking things. I have an addiction to writing automation tools in python and golang.",
  skills:
    '<span class="code">Skills:</span><li>Vulnerability Analysis</li><li>Penetraion Testing</li><li>Source Code Review</li><li>Digital Forensics</li><li>Malware Analysis</li><span class="code">Languages:</span><li>Python</li> <li>Golang</li> <li>Shell Scripting</li><li>Powershell</li><span class="code">Certifications:</span><li>C|EH (Master)',
  education:
    '<span class="code">BCA - Computer Applications</span>,[2016-2019]<br><span>Ayya Nadar Janaki Ammal College, Tamil nadu.</span><br><span class="code">MCA - Computer Applications</span>,[2019-2021]<br><span>Ayya Nadar Janaki Ammal College, Tamil nadu.</span><br>',
  experience: "--------------------------------<br>Security Researcher - Bugcrowd<br>Oct 2018 – Present<br>--------------------------------",
  // contact:
  //   "You can contact me on any of following links:<br><a href='https://www.facebook.com/jatin.rao.51/' class='success link'>LinkedIn</a> ,<a href='https://www.instagram.com/jatin.codes/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/jatinn_r/' class='success link'>Twitter</a><br>",
  clear:
    "",
  exit:
    ""
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  // document.getElementById("dummyKeyboard").focus();
  // console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
    terminalOutput.innerHTML = `${terminalOutput.innerHTML
      }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  } else {
    if (input === "clear") {
      terminalOutput.innerHTML = "";
    } else if (input === "exit") {
      window.open("", "_self");
      window.close();
    } else {
      output += COMMANDS[input];
      terminalOutput.innerHTML = `${terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

  }

};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);


// page loader

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// 404 redirection
function redirect() {
  setTimeout(function () {
    window.location.replace("/index.html");
  })
}







