using System;

namespace DouglasAIApp
{
    // This class represents a very simple AI named Douglas who is 'dumb' and Brazilian
    public class DouglasAI
    {
        // Simulate Douglas's dumb responses based on input
        public string Respond(string input)
        {
            // Douglas barely understands and often gives silly or unrelated answers
            if (string.IsNullOrWhiteSpace(input))
            {
                return "Douglas está confuso. Por favor, diga algo.";
            }
            input = input.ToLower();

            if (input.Contains("olá") || input.Contains("oi"))
            {
                return "Uh... oi, eu acho?";
            }
            else if (input.Contains("como você está"))
            {
                return "Estou bem... eu acho. Você gosta de futebol?";
            }
            else if (input.Contains("qual é o seu nome"))
            {
                return "Douglas. Mas eu esqueço de tudo o mais.";
            }
            else if (input.Contains("inteligente") || input.Contains("esperto"))
            {
                return "Hah, eu não entendo muito bem isso.";
            }
            else
            {
                return "Uh... o que foi isso? Douglas não tem certeza.";
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            DouglasAI douglas = new DouglasAI();

            Console.WriteLine("Fale com Douglas (digite 'sair' para encerrar):");

            while (true)
            {
                Console.Write("> ");
                string input = Console.ReadLine();
                if (input == null)
                    break;

                if (input.Equals("sair", StringComparison.OrdinalIgnoreCase))
                    break;

                string response = douglas.Respond(input);
                Console.WriteLine(response);
            }

            Console.WriteLine("Tchau!");
        }
    }
}
