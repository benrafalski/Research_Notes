#!/usr/bin/python3

filenames = [
    "Advent of Islam",
    "Abu Muslim revolution",
    "Abbasid caliphate",
    "Iranian intermezzo",
    "The Saffarids",
    "The Samanids",
    "The Iranian renaissance",
    "The Ghaznavids",
    "The Buyids",
    "Seljuqs",
    "Isma'iliyah",
    "Khwarezm-Shahs",
    "Mongol invasion",
    "Il-Khans",
    "Timurids",
    "Turkmen",
    "Shah Isma'il",
    "Shah Abbas I",
    "The Afghan interlude",
    "Religious Developments",
    "Nadir Shah",
    "Zand Dynasty",
    "Qajar Dynasty",
    "Fath Ali Shah",
    "Naser al-Din Shah",
    "Mozaffar al-Din Shah",
    "Constitutional revolution",
    "Anglo-Russian Entente",
    "Majles suppression",
    "Anglo-Persian Oil Company",
    "Second Majles",
    "Sheikh Fazlullah Nuri execution",
    "Majles reforms",
    "William Morgan Shuster",
    "World War I",
    "WWI End",
    "Majles rejects Anglo-Persian agreement",
    "Reza Khan coup",
    "Reza Khan becomes prime minister",
    "Reza Shah Pahlavi crowned",
    "Abolishing Foreign Treaties",
    "Oil concession revised",
    "University of Tehran",
    "Women's rights",
    "Anglo-Soviet Invasion",
    "Abdication of Reza Shah",
    "Establishment of KDPI",
    "Establishment of the Republic of Mahabad",
    "Iran-Soviet Crisis",


]







dets = "hihi"

filecontents = f"""
<!DOCTYPE html>
<html>
<head>
    <title>{dets}</title>
    <link rel="icon" type="image/x-icon" href="../../../images/Flag-Israel.webp">
    <link rel="apple-touch-icon" href="../../../images/Flag-Israel.webp">
    <link rel="stylesheet" href="../../../styles.css">
</head>

<body>
    <h2>{dets}</h2>
    <ul>
        <li></li>
    </ul>
    <span>Sources: [
        <a href="" target="_blank">1</a>
        ,
        <a href="" target="_blank">2</a>
        ,
        <a href="" target="_blank">3</a>
        ]
    </span>
    </table>

</body>
</html>
"""

filename = "file.html"
f = open(filename, "w")
f.write(filecontents)
f.close()
