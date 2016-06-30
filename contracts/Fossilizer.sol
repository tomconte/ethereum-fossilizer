contract Fossilizer {

  struct Document {
    address sender;
    string path;
    string computer;
  }

  struct Email {
    address sender;
    string subject;
    string emailFrom;
    string emailTo;
  }

  event DocumentFossilized (
    uint timestamp,
    address indexed sender,
    string path,
    string computer
  );

  event EmailFossilized (
    uint timestamp,
    address indexed sender,
    string subject,
    string emailFrom,
    string emailTo
  );

  mapping(uint256 => Document) public documents;
  mapping(uint256 => Email) public emails;

  function fossilizeDocument(uint256 hash, string path, string computer) {
    documents[hash].sender = msg.sender;
    documents[hash].path = path;
    documents[hash].computer = computer;
    DocumentFossilized(now, msg.sender, path, computer);
  }

  function fossilizeEmail(uint256 hash, string subject, string emailFrom, string emailTo) {
    emails[hash].sender = msg.sender;
    emails[hash].subject = subject;
    emails[hash].emailFrom = emailFrom;
    emails[hash].emailTo = emailTo;
    EmailFossilized(now, msg.sender, subject, emailFrom, emailTo);
  }

}
