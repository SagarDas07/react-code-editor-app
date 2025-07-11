export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `console.log("Hello, World!");\n`,
  typescript: `console.log("Hello, World!");\n`,
  python: `print("Hello, World!")\n`,
  java: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n    class Program { \n        static void Main(string[] args) {\n            Console.WriteLine(\"Hello, World!\");\n        }\n    }\n}\n',
  php: "<?php\necho 'Hello, World!';\n",
};
