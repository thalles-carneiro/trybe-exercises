def validate_email(email):
    if not email[0].isalpha():
        raise ValueError("Username should starts with a letter")

    # validate username
    username, email_without_username = email.split("@")
    for char in username:
        if not (char.isalpha() or char.isdigit() or char in "-_"):
            raise ValueError(
                "Username should contains only letters, "
                "digits, dashes or underscores"
            )

    # validate website
    website, extension = email_without_username.split(".")
    for char in website:
        if not (char.isalpha() or char.isdigit()):
            raise ValueError(
                "Website should contains only letters, and digits"
            )

    # validate extension
    if len(extension) > 3:
        raise ValueError("Extension maximum length is 3")

    return None
