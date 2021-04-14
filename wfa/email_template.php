<?php
$EMAIL_INFO = [
	'site_name'                 => 'Westie Foundation of America',
	'site_url'                  => fullUrl(''),
	'site_logo'                 => fullUrl('/images/logo-blue.svg'),
	'footer_text_color'         => '#FFFFFF',
	'footer_background_color'   => '#132149',
	'footer_content'            => [
		'Westie Foundation of America',
		'info@westiefoundation.org'
	],
	'subject'                   => 'Thank you for donating to Westie Foundation of America!',
	'content'                   => [
		'Dear {first_name} {last_name},',
		'Thank you for your kind donation today.',
		'It will help fund to further our work towards westies health challenges and identification of genetic markers, diagnostic tools, treatments, and cures.',
		'Your generosity truly helps to esnure the health of our beloved West Highland White Terriers – we are grateful!'
	]
]
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title><?= $EMAIL_INFO['subject'] ?></title>
	</head>
	<style>
		.emailBackground {
			background-color: #f5f4f4; 
			color: #333333; 
			font-size: 16px; 
			text-align: left; 
			width: 100%; 
			font-family: sans-serif; 
			line-height: 1.5; 
			border-collapse: collapse;
		}
	</style>
	<body style="margin: 0; padding: 0;">

		<!-- Container Table -->
		<table align="center" border="0" cellpadding="0" cellspacing="0" class="emailBackground">
			<tbody>
				<tr>
					<td>
						<table align="center" border="0" cellpadding="30" cellspacing="0" width="600" style="background:#002D56; width: 600px !important;">
						<!-- Wrapper Div -->
						<div style="max-width: 600px; margin: 30px auto; background-color: #ffffff;">

							<!-- Header -->
							<table border="0" cellspacing="0" cellpadding="30" style="width: 100%;">
								<tbody>
									<tr>
										<td style="text-align: center; padding: 46px 30px 0;">
											<a href="<?= $EMAIL_INFO['site_url'] ?>" style="display: inline-block;" title="<?= $EMAIL_INFO['site_name'] ?>">
												<img src="<?= $EMAIL_INFO['site_logo'] ?>" width="150" alt="<?= $EMAIL_INFO['site_name'] ?>" style="vertical-align: middle"/>
											</a>
										</td>
									</tr>
								</tbody>
							</table>

							<!-- Content -->
							<table border="0" cellspacing="0" cellpadding="30" style="width: 100%;">
								<tbody>
									<tr>
										<td>
											<?php foreach ($EMAIL_INFO['content'] as $content) {
												echo '<p>'.$content.'</p>';
											} ?>
										</td>
									</tr>
								</tbody>
							</table>

							<!-- Divider -->
							<hr style="margin: 0 30px 16px;">

							<!-- Donation Info -->
							<table border="0" cellspacing="0" cellpadding="30" style="width: 100%;">
								<tbody>
									<tr>
										<td colspan="2">
											<h3 style="margin: 0;">Donation Info</h3>
										</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Transaction #:</th>
										<td style="padding: 5px 30px;">{transaction}</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Donation Amount:</th>
										<td style="padding: 5px 30px;">$<?= money($amount); ?></td>
									</tr>

									<?php if (!empty($rr_recurring)) { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Monthly Recurring:</th>
											<td style="padding: 5px 30px;">{rr_recurring}</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Number of Recurring Months:</th>
											<td style="padding: 5px 30px;">{rr_count}</td>
										</tr>
									<?php } else { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Monthly Recurring:</th>
											<td style="padding: 5px 30px;">OFF</td>
										</tr>
									<?php } ?>

									<?php if (!empty($additional_options)) { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Additional Options:</th>
											<td style="padding: 5px 30px;">{additional_options}</td>
										</tr>
									<?php } ?>

									<?php if (!empty($additional_options_dedication_note)) { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Gift Dedication Note:</th>
											<td style="padding: 5px 30px;">{additional_options_dedication_note}</td>
										</tr>
									<?php } ?>

									<?php if (!empty($additional_options_designation_note)) { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Gift Designation Note:</th>
											<td style="padding: 5px 30px;">{additional_options_designation_note}</td>
										</tr>
									<?php } ?>

									<?php if (!empty($newsletter)) { ?>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Subscribe to our newsletter:</th>
											<td style="padding: 5px 30px;">{newsletter}</td>
										</tr>
									<?php } ?>
								</tbody>
							</table>

							<!-- Divider -->
							<hr style="margin: 46px 30px 16px;">

							<!-- Donor Info -->
							<table border="0" cellspacing="0" cellpadding="30" style="width: 100%;">
								<tbody>
									<tr>
										<td colspan="2">
											<div class="Caption">
												<h3 style="margin: 0;">Donor Info</h3>
											</div>
										</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">First Name:</th>
										<td style="padding: 5px 30px;">{first_name}</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Last Name:</th>
										<td style="padding: 5px 30px;">{last_name}</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Email Address:</th>
										<td style="padding: 5px 30px;">{email}</td>
									</tr>
									<tr>
										<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Phone Number:</th>
										<td style="padding: 5px 30px;">{phone}</td>
									</tr>
								</tbody>
							</table>

							<?php if (!empty($ma_address)) { ?>

								<!-- Divider -->
								<hr style="margin: 46px 30px 16px;">

								<!-- Mailing Info -->
								<table border="0" cellspacing="0" cellpadding="30" width="100%">
									<tbody>
										<tr>
											<td colspan="2">
												<div class="Caption">
													<h3 style="margin: 0;">Mailing Info</h3>
												</div>
											</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Address:</th>
											<td style="padding: 5px 30px;">{ma_address}</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Apt / Suite #:</th>
											<td style="padding: 5px 30px;">{ma_apt}</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">City:</th>
											<td style="padding: 5px 30px;">{ma_city}</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Zip/Postal Code:</th>
											<td style="padding: 5px 30px;">{ma_zip_postal_code}</td>
										</tr>
										<tr>
											<th style="padding: 5px 30px; width: 50%; vertical-align: top;">Country:</th>
											<td style="padding: 5px 30px;">{ma_country}</td>
										</tr>

										<?php if (!empty($ma_state_other)) { ?>
											<tr>
												<th style="padding: 5px 30px; width: 50%; vertical-align: top;">State/Province:</th>
												<td style="padding: 5px 30px;">{ma_state_other}</td>
											</tr>
										<?php } else { ?>
											<tr>
												<th style="padding: 5px 30px; width: 50%; vertical-align: top;">State/Province:</th>
												<td style="padding: 5px 30px;">{ma_state}</td>
											</tr>
										<?php } ?>
									</tbody>
								</table>
							<?php } ?>

							<!-- Footer -->
							<table border="0" cellspacing="0" cellpadding="30" style="width: 100%; margin-top: 46px; color: <?= $EMAIL_INFO['footer_text_color'] ?>; background-color: <?= $EMAIL_INFO['footer_background_color'] ?>; text-align: center;">
								<tbody>
									<tr>
										<td>
											<p>
												<?php foreach ($EMAIL_INFO['footer_content'] as $footer_content) {
													echo $footer_content.'<br/>';
												} ?>
												<a href="<?= 'mailto:'.$EMAIL_INFO['site_email'] ?>" style="color: #ffffff;"><?= $EMAIL_INFO['site_email'] ?></a>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>