<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'racekc');

/** MySQL database username */
define('DB_USER', 'racekc');

/** MySQL database password */
define('DB_PASSWORD', '2ZW2GvtKEbCqNtsM');

/** MySQL hostname */
define('DB_HOST', 'betadb1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'HAt5P~vl{c.y16#La9V[XUhxhFm*&#0j4@Qvb.Xu3p=B[8&]81|WX>,$D)=%Z|.9');
define('SECURE_AUTH_KEY',  'r,t`Jn]g5LR=qq%hqD]mW{sB}H$;3V!Y*cteaV03hg|?wXz/Ps]O@#Alhb,Cn||)');
define('LOGGED_IN_KEY',    'X$hx-@d`B*zVLP{Kty0F+uE_ @Sts,ul8<f~M^7jF3gyB;iaAnGS}R>rZI?<u2oI');
define('NONCE_KEY',        '%sux;&~WAq~X @?^xg0MIEBWUF)xCH@|_Z<)Rvwk}H(9k0`9+edPtU^a1WF:Q+cN');
define('AUTH_SALT',        '9iyCN$vvL2MqR}7LjNa-pSK~p!|+;6hU*{-Rw5mbeC_E,|,Varaz:[uR)r+XCN:,');
define('SECURE_AUTH_SALT', 'EL-wt+w=5Gq0R.S.Z&w$J1cPox|%ZE:L0)mT6d]lFFkUx8^|or}Y(ihk1-nApJ|/');
define('LOGGED_IN_SALT',   '!k{,-p&!5u9Y$m2Yw)CuVt5w.L-A7TTf q@-md?vPZR)BU9z||J?`Z+z4=E2tjXg');
define('NONCE_SALT',       'Zp4dSnvEzIZ:b}GHA{Q.bdN<Na^Gi4I~BtNno}m[F7a8Cffz4;n%BTR_e<0,.q]7');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
