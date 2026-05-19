import re
import glob
from matplotlib import pyplot as plt
import numpy as np

# split_svg = []
# split_lines = []

real_lines = []
true_lines =  []
rejected_votes =  []

read_lines = []

# with open('1680 Aa en Hunze.txt') as f:
#     lines = f.readlines()
    
# with open('SVG.txt') as g:
#     lines2 = g.readlines()

# for line in lines:
#     separator = "\t"
#     split_line = line.split(separator)
#     split_lines.append(split_line)
#     x = split_line[1].replace("\n", "")
#     real_lines.append(x)

# for i in range(len(lines2)):
#     for j in range(len(real_lines)):
#         if real_lines[j][0] in lines2[i]:
#             municp = real_lines[j][1]
#             print(lines2[i].replace(real_lines[j][0], municp))
#     else:
#         print(line)

def rejectedVotes():

    with open('SVG.txt') as e:
        read_lines = e.readlines()

    with open('Distinct.txt') as f:
        lines = f.readlines()

    with open('1680 Aa en Hunze.txt') as g:
        lines2 = g.readlines()

    for line in lines:
        separator = re.split("',", line)
        real_lines.append(separator[0])
        x = separator[1].replace("\n", "")
        rejected_votes.append(int(x.replace(" ", "")))

    for line2 in lines2:
        separator = "\t"
        x = line2.split(separator)
        y = x[1]
        x.pop()
        x.append(y.replace("\n", ""))
        true_lines.append(x)

    count = 0
    
    bin_1 = []
    bin_2 = []
    bin_3 = []
    bin_4 = []
    bin_5 = []
    bin_6 = []
    bin_7 = []
    bin_8 = []
    bin_10 = []

    for i in range(len(read_lines)):
        if 'GM' in read_lines[i]:
            if (count < 351):
                if rejected_votes[count] == 10:
                    bin_1.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 11:
                    bin_2.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 12:
                    bin_3.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 14:
                    bin_4.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 16:
                    bin_5.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 18:
                    bin_6.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 20:
                    bin_7.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 24:
                    bin_8.append(real_lines[count])
                    count += 1
                if rejected_votes[count] == 29:
                    bin_10.append(real_lines[count])
                    count += 1
    bin_10.append('Zwolle')

    
    for i in range(len(read_lines)):
        for j in range(len(true_lines)):
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_1:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#800080\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#800080\">")   
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_2:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#EA5D06\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#EA5D06\">")   
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_3:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#00B7B2\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#00B7B2\">")         
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_4:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#FFFF00\" d=") 
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#FFFF00\">")             
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_5:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#EF7600\" d=")  
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#EF7600\">")      
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_6:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#76B72B\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#76B72B\">")      
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_7:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#1170CE\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#1170CE\">") 
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_8:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#47B91A\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#47B91A\">")     
            if true_lines[j][0] in read_lines[i] and true_lines[j][1] in bin_10:
                read_lines[i] = read_lines[i].replace("st0\" d=", "st0\" fill=\"#E34234\" d=")
                read_lines[i] = read_lines[i].replace("g id=\"" + true_lines[j][0] + "\">", "g id=\"" + true_lines[j][0] + "\" fill=\"#E34234\">")       


    #f = open("SVG2.txt", "a")
    #print(f"{read_lines}", file=f)
    #f.close()
    



def second_largest_party():
    txt_files = glob.glob("HVA/Verkiezingswebsite/teeyeexoofee43/*.txt")

    #percentages = [0.2186666374999856, 0.15023344858010074, 0.10788621003157293, 0.09504126125939426, 0.05980810242724352, 0.05729640985020223, 0.05155095745387155, 0.05018616785501703, 0.03835322616113133, 0.03370238779174836, 0.024223696163007975, 0.02366147000840077, 0.020651641220656304, 0.020266717785112943, 0.048471665912554474]

    #labels = ['VVD', 'D66', 'PVV (Partij voor de Vrijheid)', 'CDA', 'SP (Socialistische Partij)', 'Partij van de Arbeid (P.v.d.A.)', 'GROENLINKS', 'Forum voor Democratie', 'Partij voor de Dieren', 'ChristenUnie', 'Volt', 'JA21', 'Staatkundig Gereformeerde Partij (SGP)', 'DENK',  'Andere partijen']

    #print(len(percentages))
    #print(len(labels))

    #fig = plt.figure(figsize=(10, 7))
    #plt.pie(percentages, labels=labels, startangle=90)
    #plt.show()
    
    for file in txt_files:

        votes = []
        party = []
        name = []
        ratios = []
        real_ratios = []
        with open(file) as f:
            read_lines = f.readlines()
            for line in read_lines:
                separator = re.split(" [$][$]", line)
                votes.append(int(separator[1]))
                real_party = separator[2].replace("\n", "")
                name.append(separator[0])
                party.append(int(real_party))
        votes2 = []
        total_votes = sum(votes)
        for party2 in votes:
            votes2.append(party2 / total_votes)
        
        #for i in range(len(votes)):
            #little_vote = []
            #x = percentages[(party[i] - 1)]
            #y = votes2[i]
            #if y > 0:
                #little_vote.append(x / y)
                #little_vote.append(party[i])
                #ratios.append(little_vote)

        #for i in range(len(ratios)):
            #real_ratios.append(ratios[i][0])
            #z = real_ratios.index(max(real_ratios))
        
        #if ratios[z][1] > 20:
            #print(ratios[z][1])
        
        #f = open("Distinct.txt", "a")
        #print(f"{name[0], ratios[z][1]}", file=f)
        #f.close()    

        if 'Delta' in file:
            value2 = votes.index(max(votes))
            val = votes.pop(value2)
            print(max(votes))


second_largest_party()