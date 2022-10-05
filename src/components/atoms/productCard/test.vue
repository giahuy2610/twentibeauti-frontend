MSSV: 20520556
Ten sv: Trinh Gia Huy
BTTH1
1.

CREATE TABLE USER(
    UID NUMBER(5) CONSTRAINT PK_U PRIMARY KEY,
    USERNAME VARCHAR(40),
    PASS VARCHAR(40),
    REGDAY DATE,
    NATIONALITY VARCHAR(40)
);

CREATE TABLE CHANNEL(
    CHANNELID VARCHAR2(10) CONSTRAINT PK_C PRIMARY KEY,
    CNAME VARCHAR(40),
    SUBSCRIBES NUMBER(10),
    OWNER NUMBER(5),
    CREATED DATE
);

CREATE TABLE VIDEO(
    VIDEOID VARCHAR2(10) CONSTRAINT PK_V PRIMARY KEY,
    TITLE VARCHAR2(100),
    DURATION NUMBER(10),
    AGE NUMBER(4)
);

CREATE TABLE SHARE(
    VIDEOID VARCHAR2(10),
    CHANNELID VARCHAR2(10),
    CONSTRAINT PK_S PRIMARY KEY(VIDEOID, CHANNELID)
);

ALTER TABLE CHANNEL ADD CONSTRAINT FK_OWN FOREIGN KEY(OWNER) REFERENCES USER(UID);
ALTER TABLE SHARE ADD CONSTRAINT FK_S1 FOREIGN KEY(VIDEOID) REFERENCES VIDEO(VIDEOID);
ALTER TABLE SHARE ADD CONSTRAINT FK_S2 FOREIGN KEY(CHANNELID) REFERENCES CHANNEL (CHANNELID);

ALTER SESSION SET NLS_DATE_FORMAT =' DD/MM/YYYY HH24:MI:SS ';

INSERT INTO USER VALUES ('001', 'faptv', '123456abc', '01/01/2014', 'Vi?t Nam');
INSERT INTO USER VALUES ('002', 'kemxoitv', '@147869iii', '05/06/2015', 'Campuchia');
INSERT INTO USER VALUES ('003', 'openshare', 'qwertyuiop', '12/05/2009', 'Vi?t Nam');

INSERT INTO CHANNEL VALUES ('C120', 'FAP TV', '2343', '001', '02/01/2014');
INSERT INTO CHANNEL VALUES ('C905', 'Kem xôi TV', '1032', '002', '09/07/2015');
INSERT INTO CHANNEL VALUES ('C357', 'OpenShare Cáfe', '5064', '003', '10/12/2010');

INSERT INTO VIDEO VALUES ('V100229', 'FAPtv ', '468', '18');
INSERT INTO VIDEO VALUES ('V211002', 'Kem xôi:', '312','16');
INSERT INTO VIDEO VALUES ('V400002', 'Ch?a quên ???c ng??i yêu c?', '378','0');

INSERT INTO SHARE VALUES ('V100229', 'C905');
INSERT INTO SHARE VALUES ('V211002', 'C120');
INSERT INTO SHARE VALUES ('V400002', 'C357');


-- 3. Hi?n th?c ràng bu?c toàn v?n sau: Ngày dang ký du?cm?c d?nh là ngày hi?n t?i.
CREATE OR REPLACE TRIGGER trigger_regday
  BEFORE INSERT OR UPDATE ON USER
  FOR EACH ROW
BEGIN
  :new.regday := sysdate;
END;
-- 4. Hi?n th?c ràng bu?c toàn v?n sau: Ngày t?o kênh luôn l?n hon ho?c b?ng ngày dang ký c?a ngu?i dùng s? h?u kênh dó.
CREATE OR REPLACE TRIGGER trigger_day BEFORE
    INSERT OR UPDATE ON channel
    REFERENCING
        NEW AS new
    FOR EACH ROW
DECLARE
    regdaytemp USER.regday%TYPE;
BEGIN
    SELECT
        regday
    INTO regdaytemp
    FROM
        USER
    WHERE
        UID = :new.OWNER;
 
    IF ( :new.created < regdaytemp ) THEN
        raise_application_error(-20000, 'L?i. Ngày t?o kênh luôn l?n hon ho?c b?ng ngày dang ký c?a ngu?i dùng s? h?u kênh dó');
    END IF;
 
END;

--5.Tìm t?t c? các video có gi?i h?n d? tu?i t? 16tr? lên.
SELECT  *
FROM    VIDEO
WHERE   AGE >= 16;
--6. Tìm kênh có s? ngu?i theo dõi nhi?u nh?t.
SELECT  *
FROM    CHANNEL
WHERE   SUBSCRIBES = (SELECT MAX(SUBSCRIBES)
                        FROM CHANNEL);                      
--7. V?i m?i video có gi?i h?n ?? tu?i là 18, th?ng kê s? kênh ?ã chia s?.
SELECT COUNT(S.CHANNELID)
FROM VIDEO V, SHARE S
WHERE V.VIDEOID = S.VIDEOID
AND S.VIDEOID = (SELECT VIDEOID FROM VIDEO WHERE AGE >= 18);
--8. Tìm video ???c t?t c? các kênh chia s?.
SELECT  VIDEOID
FROM    VIDEO VI
WHERE   NOT EXISTS( SELECT *
                    FROM CHANNEL C
                    WHERE NOT EXISTS( SELECT *
                                    FROM SHARE S
                                    WHERE VI.VIDEOID = S.VIDEOID
                                    AND C.CHANNELID = S.CHANNELID));
                                    

