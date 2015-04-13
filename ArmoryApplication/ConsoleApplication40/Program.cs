using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.IO;
using System.Text.RegularExpressions;

namespace ConsoleApplication40
{
    class Program
    {
        static void Main(string[] args)
        {
            WebClient client = new WebClient();
            string temp;
            string[] members = new string[200];
            temp = "0";
            string path = @"members.txt";


            StreamWriter file2 = new StreamWriter(@"data.txt");
            using (StreamReader sr = new StreamReader(path))
            {
                while (sr.Peek() >= 0)
                {

                 







                    for (int i = 0; i < 200; i++)
                    {
                        temp = sr.ReadLine();
                        members[i] = temp;


                    }






                }

            }

            file2.WriteLine("Char Name: \t Current Ilvl \t Maximum Ilvl \t Armory Audit Passed \t Items Enchanted \t Sockets empty");
           

   
           for (int i = 0; i < 200; i++)
            {
                if (members[i] != null)
                {

                    string info = client.DownloadString("http://us.battle.net/wow/en/character/zuljin/" +members[i] + "/advanced");

                    Console.WriteLine(Class1.CountStringOccurrences(info, "<span class=\"empty\">"));
                    Console.WriteLine(Class1.CountStringOccurrences(info, "enchant-shadow"));
      

     

                        string [] tempo = new string[] {"\"averageItemLevelEquipped\":"};

                        string[] temp3 = new string[] { "\"averageItemLevelBest\":" };
                        string[] words = info.Split(tempo,StringSplitOptions.None);
                        string[] words2 = info.Split(temp3, StringSplitOptions.None);
                        file2.Write(members[i] +"\t");
                        Console.Write("Char Name:" + members[i]);
                        
                        Console.Write(" Current Ilvl:");
                        string temp4 = words2[1];
                        string temp2= words[1];
                        string write =Convert.ToString( temp2[1]) + Convert.ToString(temp2[2]) + Convert.ToString(temp2[3]);

                        file2.Write(write +"\t");
                        Console.Write(temp2[1]);
                        Console.Write(temp2[2]);
                        Console.Write(temp2[3]);
                       
                            Console.Write(" Armory Audit passed:");
                        

                      
                      


                                        Console.Write(" Maximum Ilvl:");

                                        write = Convert.ToString(temp4[1]) + Convert.ToString(temp4[2]) + Convert.ToString(temp4[3]);
               
                                        file2.Write(write + "\t");
                          Console.Write(temp4[1]);
                          Console.Write(temp4[2]);
                          Console.WriteLine(temp4[3]);
                          if (Class1.CountStringOccurrences(info, "enchant-shadow") > 4 && Class1.CountStringOccurrences(info, "<span class=\"empty\">" )==0)
                          {
                              Console.Write("Yes");
                              file2.Write("Yes");
                              file2.Write("\t" + Class1.CountStringOccurrences(info, "enchant-shadow"));
                              file2.WriteLine("\t"+Class1.CountStringOccurrences(info, "<span class=\"empty\">"));
                          }

                          else
                          {
                              file2.Write("No");
                              file2.Write("\t"+Class1.CountStringOccurrences(info, "enchant-shadow"));
                              file2.WriteLine("\t"+Class1.CountStringOccurrences(info, "<span class=\"empty\">"));
                          }
                    

                  }
              }

           file2.Close();
           Console.ReadKey();
            
         
             
          }
         
        }
    }
