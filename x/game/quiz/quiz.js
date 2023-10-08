const maxQuizAttempts = 11; // Set the maximum quiz attempts
var quiz = {
  data: [
    {
      q: "กินถั่วดิบทำให้เกิดอาการ?",
      o: [
        "ท้องไม่ย่อย",
        "เป็นไข้"
      ],
      a: 0
    },
    {
      q: "สมุนไพรใช้กันจอตาเสื่อม?",
      o: [
        "เก๋ากี้",
        "ผักกูด"
      ],
      a: 0
    },
    {
      q: "ผลไม้ช่วยอวัยวะเพศชายแข็งตัว?",
      o: [
        "แตงโม",
        "ส้ม"
      ],
      a: 0
    },
    {
      q: "กินเค็มความดันเลือดจะ?",
      o: [
        "ต่ำ",
        "สูง"
      ],
      a: 1
    },
    {
      q: "จะเป็นอย่างไรเมื่อปากไม่มีน้ำลาย?",
      o: [
        "ฟันผุ",
        "กรดไหลย้อน"
      ],
      a: 0
    },
    {
      q: "โรคจากกินเครื่องในสัตว์?",
      o: [
        "ไขข้ออักเสบ",
        "หน้าอกใหญ่"
      ],
      a: 0
    },
    {
      q: "คานคอดินมีหน้าที่อะไร?",
      o: [
        "ทำให้หน้าดินเรียบ",
        "ประคองน้ำหนักลงเสา"
      ],
      a: 1
    },
    {
      q: "เมื่อสูดควันอลูมิเนียมเป็นประจำ?",
      o: [
        "สมองเสื่อม",
        "ปอดชื้น"
      ],
      a: 0
    },
    {
      q: "ฟุตติ้งฐานเสามีหน้าที่?",
      o: [
        "กันปลวกขึ้นเสา",
        "ถ่ายแรงเสาลงหน้าดิน"
      ],
      a: 1
    },
    {
      q: "ปลูกดอกไม้ใดไล่แมลงรบกวน?",
      o: [
        "ดอกดาวเรือง",
        "ดอกเข็ม"
      ],
      a: 0
    },
    {
      q: "ใช้ผสมน้ำเช็ดตัวลดไข้-ตัวร้อน?",
      o: [
        "น้ำองุ่นขาว",
        "น้ำส้มสายชู"
      ],
      a: 1
    },
    {
      q: "แคะขี้มูกบ่อยๆเสี่ยงเกิดโรค?",
      o: [
        "โรคอัลไซเมอร์",
        "โรครูมาตอยด์"
      ],
      a: 0
    },
    {
      q: "พิษปรอทสะสมในสัตว์น้ำใด?",
      o: [
        "สัตว์น้ำตื้น",
        "สัตว์น้ำลึก"
      ],
      a: 0
    },
    {
      q: "กินสัตว์ปีกเสียงมะเร็งชนิดใด?",
      o: [
        "มะเร็งผิวหนัง",
        "มะเร็งต่อมน้ำเหลือง"
      ],
      a: 1
    },
    {
      q: "สาหร่ายใช้ดูดซับไขมัน-ลดความอ้วน?",
      o: [
        "สาหร่ายวากาเมะ",
        "สาหร่ายพวงองุ่น"
      ],
      a: 0
    },
    {
      q: "เส้นวงปีท่อนไม้ใช้บอกอะไร?",
      o: [
        "จำนวนแตกหน่อ",
        "อายุต้นไม้"
      ],
      a: 1
    },
    {
      q: "ปลูกไม้ผลติดๆกันจะเกิด?",
      o: [
        "ต้นไม้ไม่ออกผล",
        "ต้นไม้ลูกดก"
      ],
      a: 0
    },
    {
      q: "คนนั่งกระดกปลายเท้าแสดงว่า?",
      o: [
        "กำลังหงุดหงิด",
        "อารมณ์กำลังดี"
      ],
      a: 1
    },
    {
      q: "บุหรี่สามารถป้องกันโรคอะไรได้?",
      o: [
        "มะเร็งปอด",
        "พาร์กินสัน"
      ],
      a: 1
    },
    {
      q: "ผงอะไรใช้ลับมีดแล้วคม?",
      o: [
        "ผงซักฟอก",
        "ผงสนิม"
      ],
      a: 0
    },
    {
      q: "อาการคนกำลังพูดโกหก?",
      o: [
        "หัวไหล่ไม่นิ่ง",
        "กุมมือที่เป้ากางเกง"
      ],
      a: 0
    },
    {
      q: "กินอาหารไขมันมากๆจะเกิดโรค?",
      o: [
        "โรคกระเพาะ",
        "ตับอักเสบ"
      ],
      a: 1
    },
    {
      q: "ในวุ้นว่านหางจระเข้สกัดเป็นสาร?",
      o: [
        "สารจับใบ",
        "สารหยุดโต"
      ],
      a: 0
    },
    {
      q: "วิธีสร้างจุดบอดในสมอง?",
      o: [
        "ให้นึกภาพในอดีต",
        "ให้ร้องเพลง"
      ],
      a: 0
    },
    {
      q: "จะเก็บผลไม้ให้อยู่นาน?",
      o: [
        "ห่อผ้าเก็บ",
        "เชื่อม"
      ],
      a: 1
    },
    {
      q: "คนยกคิ้วให้เราแปลว่า?",
      o: [
        "เขาสนใจ",
        "เขาไม่สนใจ"
      ],
      a: 0
    },
    {
      q: "คนหันเท้าหนีตอนคุยคือ?",
      o: [
        "อยากคุยต่อ",
        "พอ!เขาจะไปแล้ว"
      ],
      a: 1
    },
    {
      q: "ทำสิ่งใดจะหายง่วงหลับใน?",
      o: [
        "กลั้นหายใจ",
        "ตบหน้า"
      ],
      a: 0
    },
    {
      q: "ประโยชน์เมื่อปล่อยให้หิวบ่อยๆ?",
      o: [
        "ผมยาวเร็ว",
        "อายุยืนกว่าคนอื่น"
      ],
      a: 1
    },
    {
      q: "เลขลงท้ายที่หารากที่2ไม่ได้?",
      o: [
        "0,1,4,5,6,9",
        "2,3,7,8"
      ],
      a: 1
    },
    {
      q: "เชือกธรรมชาติหาได้ใกล้ตัว?",
      o: [
        "ยางพารา",
        "รากไม้"
      ],
      a: 1
    },
    {
      q: "ยางต้นไม้อะไรติดไฟง่าย?",
      o: [
        "ยางต้นสน",
        "ยางต้นยางอินเดีย"
      ],
      a: 0
    },
    {
      q: "ส่วนผสมเทอร์ไมท์ใช้สำหรับหลอมเหล็ก?",
      o: [
        "ผงเบกกิ้งโซดา + ยางมะตอย",
        "ผงสนิม + ผงอลูมิเนียม"
      ],
      a: 1
    },
    {
      q: "ใช้ผงอะไรทำลายตอไม้ใหญ่?",
      o: [
        "เบกกิ้งโซดา",
        "เกลือ"
      ],
      a: 1
    },
    {
      q: "แร่หินอะไรใช้ทำสารหนู?",
      o: [
        "แร่หินอาร์เซนิก",
        "แร่หินเหล็กไฟ"
      ],
      a: 0
    },
    {
      q: "ต้นไม้ตระกูลอะไรใช้ดูดสารหนูตกค้างในดิน?",
      o: [
        "ผักกูด",
        "พลูด่าง"
      ],
      a: 0
    },
    {
      q: "ทำไมคนโกหกต้องจ้องตาตลอด?",
      o: [
        "ต้องคอยเช็คสีหน้า",
        "ลูกตาเกร็ง"
      ],
      a: 0
    },
    {
      q: "เสริมหน้าอกด้วยซิลิโคนก่อโรคอะไร?",
      o: [
        "กระดูกคด",
        "มะเร็ง"
      ],
      a: 1
    },
    {
      q: "ดอกอะไรเร่งแม่ไก่ให้ออกไข่สีสด?",
      o: [
        "ดอกเข็ม",
        "ดอกดาวเรือง"
      ],
      a: 1
    },
    {
      q: "พิษจากหมึกเครื่องถ่ายเอกสารก่อโรคอะไร?",
      o: [
        "มะเร็งปอด",
        "นิ่วในไต"
      ],
      a: 0
    },
    {
      q: "สิ่งใดใช้เลี้ยงมะเร็งให้โต?",
      o: [
        "เกลือ",
        "น้ำตาล"
      ],
      a: 1
    },
    {
      q: "น้ำตาลเทียมก่อโรคอะไร?",
      o: [
        "มะเร็ง",
        "กระดูกพรุน"
      ],
      a: 0
    },
    {
      q: "สมองสั่งกรอกลูกตาไปด้านข้างทำไม?",
      o: [
        "ย้อนดูภาพในอดีต",
        "ย้อนฟังเสียงในอดีต"
      ],
      a: 1
    },
    {
      q: "ดูคนยิ้มจากใจจริงอย่างไร?",
      o: [
        "ยิ้มเห็นฟัน",
        "ยิ้มตามีรอยย่น"
      ],
      a: 1
    },
    {
      q: "เมื่อเจอคนโมโหควรทำตัวอย่างไร?",
      o: [
        "จ้องระหว่างคิ้ว",
        "เอียงหัวออกข้าง"
      ],
      a: 1
    },
    {
      q: "คำเรียกบุคคลที่3จึงรู้ว่าคนพวกนี้ไม่สนิทกัน?",
      o: [
        "พี่/น้อง",
        "เขา"
      ],
      a: 1
    },
    {
      q: "คนนั่งลูบเข่าแปลว่าอะไร?",
      o: [
        "พร้อมจะลุกออก",
        "รู้สึกหนาว"
      ],
      a: 0
    },
    {
      q: "สารตกค้างในเนื้อไก่ระบบฟาร์ม?",
      o: [
        "สารตะกั่ว",
        "สารหนู"
      ],
      a: 1
    },
    {
      q: "ไม้สังเคราะห์อะไรมีปริมาณพิษสูงมาก?",
      o: [
        "ไม้ปาติเกิ้ล",
        "ไม้อัด"
      ],
      a: 0
    },
    {
      q: "สะพายกระเป๋าหนักๆข้างเดียวจะเกิดอะไร?",
      o: [
        "ตัวเตี้ย",
        "กระดูกสันหลังคด"
      ],
      a: 1
    },
    {
      q: "แก้สะอึกต้องทำยังไง?",
      o: [
        "กรีดร้อง",
        "กลืนอากาศกลั้นหายใจ"
      ],
      a: 1
    },
    {
      q: "จระเข้กินหินทำไม?",
      o: [
        "ถ่วงสมดุลตัวในน้ำ",
        "ป้องกันน้ำย่อย"
      ],
      a: 0
    },
    {
      q: "อาร์คิมิดิสใช้อะไรชั่งน้ำหนักมงกุฎทอง?",
      o: [
        "น้ำ",
        "ทราย"
      ],
      a: 0
    },
    {
      q: "ดาวอะไรชนกับโลกแล้วทำให้เกิดดวงจันทร์?",
      o: [
        "ดาวศุกร์",
        "ดาวธีอา"
      ],
      a: 1
    },
    {
      q: "ยีสต์ใส่ในแป้งขนมปังเพื่ออะไร?",
      o: [
        "ขนมปังฟู",
        "กินแล้วอิ่มนาน"
      ],
      a: 0
    },
    {
      q: "สัตว์อะไรใช้ดูดเลือดเสียทางการแพทย์?",
      o: [
        "ปลิง",
        "แมลงวัน"
      ],
      a: 0
    },
    {
      q: "สารอะไรทำให้ปลามีกลิ่นเหม็นคาว?",
      o: [
        "สารหนู",
        "สารTMAO"
      ],
      a: 1
    },
    {
      q: "ลายสลับของม้าลายช่วยอะไร?",
      o: [
        "ป้องกันแมลงวันตอม",
        "สังเคราะห์แสง"
      ],
      a: 0
    },
    {
      q: "สูตรหน่วยเลขสร้างสามเหลี่ยมมุมฉาก?",
      o: [
        "1-2-3",
        "3-4-5"
      ],
      a: 1
    },
    {
      q: "พฤติกรรมที่ทำให้คนอื่นเลียนแบบตามง่าย?",
      o: [
        "หาว",
        "จาม"
      ],
      a: 0
    },
    {
      q: "พฤติกรรมที่ทำให้คนอื่นเลียนแบบตามง่าย?",
      o: [
        "ไอ",
        "หัวเราะ"
      ],
      a: 1
    },
    {
      q: "ผงอะไรใช้ล้างสารเคมีในผัก-ผลไม้?",
      o: [
        "ผงถ่าน",
        "ผงซักฟอก"
      ],
      a: 0
    },
    {
      q: "ฟลูออไรด์ในยาสีฟันก่อโรคอะไร?",
      o: [
        "โรคมะเร็ง",
        "โรคไทรอยด์"
      ],
      a: 1
    },
    {
      q: "ปากเหม็นขี้เกิดจากอะไร?",
      o: [
        "นอนน้อย",
        "ลำไส้รั่ว"
      ],
      a: 1
    },
    {
      q: "อะไรช่วยกำจัดกลิ่นคาวปลา?",
      o: [
        "แสตนเลส",
        "ใบมะยม"
      ],
      a: 0
    },
    {
      q: "พันข้อมือก่อนชกมวยช่วยอะไร?",
      o: [
        "ให้คู่ชกไม่เจ็บ",
        "ป้องกันข้อมือหัก"
      ],
      a: 1
    },
    {
      q: "ดูสัตว์อะไรที่บอกว่าฝนจะตกหนัก?",
      o: [
        "มดย้ายไข่",
        "แมวกระโดดไกล"
      ],
      a: 0
    },
    {
      q: "สมุนไพรใช้ฆ่าเชื้อสมานแผล?",
      o: [
        "ว่านหางจระเข้",
        "น้ำผึ้ง"
      ],
      a: 1
    },
    {
      q: "สารกันบูดในอาหารก่อโรคอะไร?",
      o: [
        "มะเร็งลำไส้",
        "หูหนวก"
      ],
      a: 0
    },
    {
      q: "ขุดหลุมลึกใกล้จอมปลวกจะพบอะไร?",
      o: [
        "ทองคำ",
        "ตาน้ำ"
      ],
      a: 1
    },
    {
      q: "หน่วยฟุต(ft)ดั้งเดิมใช้อะไรเป็นเกณฑ์วัด?",
      o: [
        "เท้า",
        "ฝ่ามือ"
      ],
      a: 0
    },
    {
      q: "เอ็นไซม์เทโลเมอเรสมีหน้าที่ควบคุมอะไร?",
      o: [
        "อายุขัย",
        "สร้างอวัยวะ"
      ],
      a: 0
    },
    {
      q: "สารจากเมล็ดสะเดาใช้ทำอะไร?",
      o: [
        "ไล่หมา",
        "กำจัดแมลง"
      ],
      a: 1
    },
    {
      q: "โครงสร้างเรขาคณิตที่รับน้ำหนักได้มากที่สุด?",
      o: [
        "สามเหลี่ยม",
        "วงกลม"
      ],
      a: 0
    },
    {
      q: "ใบป่าช้าเหงาช่วยรักษาโรคอะไร?",
      o: [
        "สมองเสื่อม",
        "เบาหวาน"
      ],
      a: 1
    },
    {
      q: "ใบรางจืดมีสรรพคุณ?",
      o: [
        "ขับสารพิษ",
        "เพิ่มพลังทางเพศ"
      ],
      a: 0
    },
    {
      q: "ดื่มชาเขียวป้องกันโรค?",
      o: [
        "โรคมะเร็ง",
        "โรคมือเท้าปาก"
      ],
      a: 0
    },
    {
      q: "สับต้นกล้วยไว้ในหลุมปลูกต้นไม้เพื่ออะไร?",
      o: [
        "อาหารแมลง",
        "เก็บอุ้มน้ำ"
      ],
      a: 1
    },
    {
      q: "ยางข่อยใช้รักษา?",
      o: [
        "ตาอักเสบ",
        "ฟันผุ"
      ],
      a: 1
    },
    {
      q: "ชกส่วนไหนทำให้คู่ต่อสู้สลบ?",
      o: [
        "คาง",
        "ลิ้นปี่"
      ],
      a: 0
    },
    {
      q: "ชกคู่ต่อสู้ส่วนไหนทำให้ล้มทั้งยืน?",
      o: [
        "ราวนม",
        "ตับ"
      ],
      a: 1
    },
    {
      q: "เมาเหล้ากินอะไรแล้วจะหายเมา?",
      o: [
        "นมเปรี้ยว",
        "ใบรางจืด"
      ],
      a: 1
    },
    {
      q: "สิ่งใดใช้ไล่มอดออกจากข้าว?",
      o: [
        "แสตนเลส",
        "มะนาว"
      ],
      a: 0
    },
    {
      q: "สมุนไพรใช้ฆ่าเซลล์มะเร็ง?",
      o: [
        "ใบตำลึง",
        "งาดำ"
      ],
      a: 1
    },
    {
      q: "เปลือกผลไม้ป้องกันมะเร็ง?",
      o: [
        "เปลือกแอปเปิ้ล",
        "เปลือกละมุด"
      ],
      a: 0
    },
    {
      q: "ผักอะไรกำจัดเซลล์มะเร็งดีที่สุด?",
      o: [
        "บล็อกโคลี่",
        "กะเพรา"
      ],
      a: 0
    },
    {
      q: "สารก่อมะเร็งเต้านมในผลิตภัณฑ์ระงับกลิ่นกาย?",
      o: [
        "กำมะถัน",
        "พาราเบน"
      ],
      a: 1
    },
    {
      q: "สารก่อมะเร็งปอดในแป้งฝุ่นทาตัว?",
      o: [
        "ทัลคัม",
        "ใยแก้ว"
      ],
      a: 0
    },
    {
      q: "ดื่มกาแฟเข้มข้นทำให้เกิด?",
      o: [
        "ไขข้อเสื่อม",
        "นิ่วท่อปัสสาวะ"
      ],
      a: 1
    },
    {
      q: "สระผมด้วยน้ำอุ่นประจำทำให้เกิด?",
      o: [
        "ผมร่วง",
        "รังแค"
      ],
      a: 1
    },
    {
      q: "ย้อมสีผมทำให้เกิดโรค?",
      o: [
        "สมองเสื่อมเร็ว",
        "น้ำในหูไม่เท่ากัน"
      ],
      a: 0
    },
    {
      q: "กลิ่นปากเหม็นฉี่เป็นโรค?",
      o: [
        "โรคไต",
        "โรคเบาหวาน"
      ],
      a: 0
    },
    {
      q: "ผงอะไรขจัดคราบไหม้ได้?",
      o: [
        "ผงถ่าน",
        "เบกกิ้งโซดา"
      ],
      a: 1
    },
    {
      q: "ส่วนผสมน้ำอะไรฉีดพ่นยุง-แมลงตาบเรียบ?",
      o: [
        "น้ำยาล้างจาน",
        "น้ำตาล"
      ],
      a: 0
    },
    {
      q: "เอนโทรปีในธรรมชาติทำหน้าที่?",
      o: [
        "ทำให้ยุ่งเหยิงเพิ่ม",
        "เรียงจัดระเบียบ"
      ],
      a: 1
    },
    {
      q: "พิษคลื่นแม่เหล็กไฟฟ้าทำให้เกิดโรค?",
      o: [
        "มะเร็งเม็ดเลือดขาว",
        "พิการ"
      ],
      a: 0
    },
    {
      q: "ผงสมุนไพรใช้ฆ่าเชื้อ-ปิดแผล?",
      o: [
        "ผงงาขาว",
        "ผงขมิ้น"
      ],
      a: 1
    },
    {
      q: "โลหะใช้ฆ่าเชื้อบนแผล?",
      o: [
        "ทองแดง",
        "เหล็กกล้า"
      ],
      a: 0
    },
    {
      q: "ควันบุหรี่ส่งผลอะไรกับเส้นผม?",
      o: [
        "ผมหงอก",
        "ผมนุ่มสวย"
      ],
      a: 0
    },
    {
      q: "ทำไมดื่มนมวัวแล้วเกิดสิวเห่อ?",
      o: [
        "ฉีดสารเร่งฮอร์โมนในวัว",
        "บรรจุภัณฑ์ไม่สะอาด"
      ],
      a: 0
    },
    {
      q: "เมื่อตัวแช่ในน้ำเย็นจัด-หัวใจจะเป็นอย่างไร?",
      o: [
        "หัวใจเต้นถี่ขึ้น",
        "หัวใจเต้นช้าลง"
      ],
      a: 1
    },
    {
      q: "ทำอย่างไรถึงหายเมื่อสั่นประหม่า?",
      o: [
        "สละคลายกล้ามเนื้อ",
        "เร่งเบ่งกล้ามเนื้อ"
      ],
      a: 0
    },
    {
      q: "คนโบราณใช้อะไรอุดแผลห้ามเลือด?",
      o: [
        "ดินเหนียว",
        "หยากไย่"
      ],
      a: 1
    },
    {
      q: "พริกกระเด็นเข้าแสบตา-อมอะไรถึงหาย?",
      o: [
        "เกลือ",
        "น้ำตาล"
      ],
      a: 0
    },
    {
      q: "เมื่อไม่มีน้ำยาล้างจานใช้อะไรล้างแทนได้?",
      o: [
        "ยางต้นไม้",
        "น้ำขี้เถ้าถ่าน"
      ],
      a: 1
    },
    {
      q: "ปอกหอมไม่ให้แสบตาทำยังไง?",
      o: [
        "เอาหอมแช่น้ำ",
        "กลั้นหายใจ"
      ],
      a: 0
    },
    {
      q: "ต้นตำลึงรักษาโรคอะไรโดยตรง?",
      o: [
        "ตา",
        "เล็บมือ"
      ],
      a: 0
    },
    {
      q: "เมื่อเลือดคั่งบวมควรทำอย่างไร?",
      o: [
        "ถ่ายเลือดออก",
        "ปล่อยทิ้งไว้"
      ],
      a: 0
    },
    {
      q: "หินอ่อน-หินแกรนิตปล่อยรังสีอันตรายอะไรออกมา?",
      o: [
        "ซีเซียม",
        "ก๊าซเรดอน"
      ],
      a: 1
    },
    {
      q: "ทำไมดื่มนมวัวแล้วกระดูกพรุน?",
      o: [
        "ฮอร์โมนดึงแคลเซียม",
        "มีปรอทในนม"
      ],
      a: 0
    },
    {
      q: "นักมวยทาวาสลีนที่หน้ากันทำไม?",
      o: [
        "กันหนังฉีก",
        "ให้เงางามเห็นชัด"
      ],
      a: 0
    },
    {
      q: "ทำไมกินนมวัวถึงเสี่ยงเบี่ยงเบนทางเพศ?",
      o: [
        "เร่งฮอร์โมนเพศแปรปรวน",
        "ผสมน้ำตาลจำนวนมาก"
      ],
      a: 0
    },
    {
      q: "ผงอะไรกระตุ้นสารฆ่ามะเร็งในดอกกะหล่ำ?",
      o: [
        "ผงพะโล้",
        "ผงมัสตาร์ด"
      ],
      a: 1
    },
    {
      q: "คนอินเดียบูชาใบอะไรใช้รักษาโรค?",
      o: [
        "ใบแมงลัก",
        "ใบกะเพรา"
      ],
      a: 1
    },
    {
      q: "ผักชีใช้รักษาโรคอะไร?",
      o: [
        "โรคเก๊าท์",
        "โรคกล้ามเนื้ออ่อนแรง"
      ],
      a: 0
    },
    {
      q: "โทรศัพท์มือถือวางใกล้มดลูกจะเกิดอะไร?",
      o: [
        "เร่งประจำเดือน",
        "มีลูกยาก"
      ],
      a: 1
    },
    {
      q: "แสบมือจากพริกใช้อะไรทาแล้วหาย?",
      o: [
        "เกลือ",
        "น้ำลาย"
      ],
      a: 0
    },
    {
      q: "ใช้สิ่งใดดูดความชื้นในเกลือ?",
      o: [
        "เม็ดโฟม",
        "ข้าวสาร"
      ],
      a: 1
    },
    {
      q: "เมล็ดอะไรช่วยไล่เห็บหมัด?",
      o: [
        "เมล็ดน้อยหน่า",
        "เมล็ดแตงโม"
      ],
      a: 0
    },
    {
      q: "สมุนไพรอะไรใช้ฆ่าเซลล์มะเร็ง?",
      o: [
        "ขมิ้นชัน",
        "แครอท"
      ],
      a: 0
    },
    {
      q: "พิษตะกั่วอุดฟันก่อโรคอะไร?",
      o: [
        "โรคฟันผุ",
        "โรคอวัยวะภายในทั้งหมด"
      ],
      a: 1
    },
    {
      q: "ผักอะไรใช้รักษาโรคออทิสติก?",
      o: [
        "บร็อคโคลี่",
        "ผักบุ้ง"
      ],
      a: 0
    },
    {
      q: "คนเป่าปากบ่อยๆรู้สึกอะไร?",
      o: [
        "เซ็งเครียด",
        "สนุกสนาน"
      ],
      a: 0
    },
    {
      q: "คนเอามือปิดตาบ่อยๆกำลังคิดอะไร?",
      o: [
        "ชอบใจ",
        "ไม่อยากรับรู้"
      ],
      a: 1
    },
    {
      q: "คุณ Henrietta Lacks มีอะไรที่เป็นอมตะ?",
      o: [
        "เซลล์มะเร็งอมตะ",
        "อวัยวะอมตะ"
      ],
      a: 0
    },
    {
      q: "น้ำอะไรมีสารโพลีฟีนอลป้องกันฟันผุ?",
      o: [
        "น้ำชา",
        "น้ำแดงโซดา"
      ],
      a: 0
    },
    {
      q: "นำใยแก้วไปผสมปูนเพื่ออะไร?",
      o: [
        "ยึดเกาะแข็งแรง",
        "กันความร้อน"
      ],
      a: 0
    },
    {
      q: "สีอะไรกักเก็บความร้อนในตัว?",
      o: [
        "สีดำ",
        "สีขาว"
      ],
      a: 0
    },
    {
      q: "คนจีนโบราณนำข้าวเหนียวไปผสมปูนเพื่ออะไร?",
      o: [
        "ให้นกช่วยดูแล",
        "ยืดหยุ่นกันแผ่นดินไหว"
      ],
      a: 1
    },
    {
      q: "นำกระดูกไปแช่น้ำส้มสายชูจะเกิดอะไร?",
      o: [
        "กระดูกแข็งใหญ่",
        "กระดูกงอได้"
      ],
      a: 1
    }
  ],

  hWrap: null,
  hQn: null,
  hAns: null,
  now: 0,
  score: 0,

  init: () => {
    quiz.hWrap = document.getElementById("quizWrap");
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    quiz.reset();
  },

  draw: () => {
    const randomQuestionIndex = Math.floor(Math.random() * quiz.data.length);
    const randomQuestion = quiz.data[randomQuestionIndex];
    quiz.hQn.innerHTML = randomQuestion.q;
    quiz.hAns.innerHTML = "";
    for (let i in randomQuestion.o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = randomQuestion.o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => quiz.select(label, randomQuestion.a));
      quiz.hAns.appendChild(label);
    }
  },

  select: (option, correctAnswer) => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", () => quiz.select(label, correctAnswer));
    }

    let selectedAnswer = parseInt(option.dataset.idx);
    let correct = selectedAnswer === correctAnswer;

    if (correct) {
      quiz.score++;
      option.classList.add("correct");
      confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "coins.png",
              width: 32,
              height: 32,
            },
            {
              src: "money.png",
              width: 32,
              height: 32,
            }
          ],
        },
      });
      const head = document.querySelector('head');
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          background-image: url(gold.gif);
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        }
      `;
      head.appendChild(style);
    } else {
      option.classList.add("wrong");
      const head = document.querySelector('head');
      const style = document.createElement('style');
      style.textContent = `
        html, body {
          background-image: url(false.gif);
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        }
      `;
      head.appendChild(style);
    }

    quiz.now++;
    setTimeout(() => {
      if (quiz.now < maxQuizAttempts) { quiz.draw(); }
      else {
        quiz.showResult();
      }
    }, 1000);
  },

  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    if (quiz.now < maxQuizAttempts) {
      quiz.draw();
    } else {
      quiz.showResult();
    }
  },

  showResult: () => {
    if (quiz.score == 11){
        localStorage.setItem("editus_points", Number(localStorage.getItem("editus_points")) + 1);
      quiz.hQn.innerHTML = `<center>สุดยอด! คุณตอบถูกทั้งหมด
      <br><br>รับไป<br><img src="../../coin.png" width="12%" class="animate__animated animate__zoomInUp.> x 1</center>
      `;
    quiz.hAns.innerHTML = "";
    document.querySelector('.flashing-bar').style.display = 'none';
    } else{
    quiz.hQn.innerHTML = `สุดยอด! คุณตอบถูกตั้ง ${quiz.score} ข้อจาก 11 คำถาม`;
    quiz.hAns.innerHTML = "";
    document.querySelector('.flashing-bar').style.display = 'none';
  }}
};

window.addEventListener("load", quiz.init);
